---
sidebar_position: 2
---
# Context

In all interaction with Klerk you must supply a context. As an example:

```
val myReport = klerk.read(context) { get(myReportId) }
```

The most important piece in a context
is `actor`, which specifies on whose behalf the interaction occurs (usually a logged-in user).

The context will be included in the parameters in many of the functions you provide to Klerk. As an
example,
to declare a rule that generals can read secret reports, you will create a function that looks something like this:

```
fun generalsCanReadSecretReports(args: ArgContextReader<Ctx, Data>): PositiveAuthorization {
    if (args.model !is Report || args.model.classification != Secret) {
        return NoOpinion
    }
    return if (args.context.user.rank == General) Allow else NoOpinion
}
```

It is recommended to name the context class "Ctx" but you are free to call it whatever you like. The class must
implement the `KlerkContext` interface.

:::tip
If you are eager to get started, just copy this into your code:
```
class Ctx(
    override val actor: ActorIdentity,
    override val auditExtra: String? = null,
    override val time: Instant = Clock.System.now(),
    override val translator: Translator = DefaultTranslator(),
) : KlerkContext
```
Whenever you need a context, just do `Ctx(Unauthenticated)`

Skip the remaining of this chapter and return when you need to know more about contexts.
:::


The context also contains some other stuff:
* The current `time. This allows you to keep your functions pure and still make the rules
  dependent on time (e.g. "reports can only be accessed during work hours"). Also, this makes it easy to unit test
  your functions.
* A `translator`: This is used by Klerk when it produces something that is human-readable, e.g. an error message.
* An `auditExtra`: String where you can put other data that you want to be included in the audit log.

You are free to put whatever else you want in the context. 

## Actor

The actor is one of these identities:
* ModelIdentity: Contains a full user model (see below)
* ModelReferenceIdentity: Contains only a reference to a user model.
* CustomIdentity: Should be used when there is no User model describing the user. E.g. if authenticated via SSO, the user
information is stored in an external system.
* Unauthenticated: Used to specify someone that we don't know who it is (yet).
* AuthenticationIdentity: Used to read data needed when authenticating a user, since we cannot use the users identity
until authentication is completed.
* SystemIdentity: Used by the system itself, bypassing all authorization rules. This should not be used often but may
sometimes be needed, e.g. to create the first user in a system.
* PluginIdentity: Used by plugins.

## Systems with a 'User' concept
Most systems stores data about its users, i.e. there exists a User model. In these systems
it is recommended to use ModelIdentity for logged-in users. For convenience, it is common to also put the model in the 
context so that we can easily access the user. It could look something like this:

```
data class Ctx(
    override val actor: ActorIdentity,
    override val auditExtra: String? = null,
    override val time: Instant = Clock.System.now(),
    override val translator: Translator = DefaultTranslator(),
    val user: Model<User>? = null,      // Klerk doesn't care about this
) : KlerkContext
```

Let's say the user makes an HTTP request to fetch a report and that a session cookie is 
included in the request. Using [Ktor](https://ktor.io/), we would first create a function that uses the AuthenticationIdentity to create a `Ctx` from an `ApplicationCall`:
```
suspend fun ApplicationCall.context(): Ctx {
    val userSession = call.sessions.get<UserSession>()
    if (userSession == null) {
        return Ctx(Unauthenticated)
    }
    val user = klerk.read(Ctx(AuthenticationIdentity)) {
        getFirstWhere(views.users.all) { it.props.sessionKey.string == userSession }
    }
    if (user == null) {
        return Ctx(Unauthenticated)
    }
    return Ctx(actor = ModelIdentity(user), user = user)
}
```
We can now handle the request:
```
val myReport = klerk.read(call.context()) { get(myReportId) }
```

## Context Provider
As described above, Klerk requires a context to be supplied whenever a command is executed. In most cases the command is
issued by your code and the compiler will warn if you forget to supply a context. However, in some cases a command is
issued by the system itself, either by a time-triggered block in your state machines or by a plugin. In these cases, a
context is still required. To make it work, you can add a _context provider_ in the configuration. In its simplest form
it can look like this:

```
val config = ConfigBuilder<Ctx, Views>(views).build {
    contextProvider { actor -> Ctx(actor) }
    ...
}
```
