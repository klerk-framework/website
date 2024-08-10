---
sidebar_position: 1
---

# Web Tools

_Web Tools_ is a plugin that helps you build a multi-page application (MPA) using [Ktor](https://ktor.io/).

## Admin UI

The plugin can generate an admin UI which allows you to browse the data, issue commands,
view documentation (state diagrams, event parameters etc.), audit logs and more. Even if you will eventually 
build your own admin UI, this auto generated UI can be helpful in the beginning of your project.  

To generate the admin UI, first create a configuration:

```
private val autoAdminUIConfig = LowCodeMain(
    clerk, LowCodeConfig(
        basePath = "/admin",
        contextProvider = ::contextFromCall,
        showOptionalParameters = ::showOptionalParameters,
        cssPath = "https://unpkg.com/almond.css@latest/dist/almond.min.css",
        knownAlgorithms = emptySet(),
    )
)
```

Add the routes:
```
routing {
    apply(autoAdminUIConfig.registerRoutes())
    ...
}
```

## Forms

The plugin can generate HTML forms for your event parameters. It takes care of
cross-site request forgery (CSRF) protection and [idempotence](/docs/usage/commands#idempotence).

The forms can be generated in two ways: simple and advanced.

### Simple

The easiest way to generate forms in your application is to ask Clerk to generate 
a button for each available event:

```
val buttonTargets = ButtonTargets(back = "/", model = "/game/{id}", "/")
clerk.readSuspend(context) {
    call.respondHtml {
        body {
            getPossibleVoidEvents(Game::class).forEach {
                apply(LowCodeCreateEvent.renderButton(it, clerk, null, createLCConfig(), buttonTargets, context))
            }
        }
    }
}
```
When the button is clicked, a form is rendered on a new page. The `ButtonTargets` determines the subsequent URL when the
submitted form is cancelled, succeeded or failed.

### Advanced

The advanced mode gives you more control of how the form is rendered. The form is built in tree steps:

1. Create a form template at startup.

```
val createTodoFormTemplate = EventFormTemplate(EventWithParameters(
    event = TodoEvents.CreateTodo.toEvent(),
    parameters = EventParameters(CreateTodoParams::class),
), clerk,"/todos") {
    text(CreateTodoParams::title)
    text(CreateTodoParams::body)
    selectReference(CreateTodoParams::owner)
}
```
It is recommended to call `validate()` on the template on startup to avoid unpleasant surprises in production.

2. Use the template to generate a form object.

```
val createTodoFormDefaultValues = CreateTodoParams(
            title = Title("your default value here"),
            body = Body(""),
            owner = context.user.id
        )
val createTodoForm = createTodoFormTemplate.build(
            call,       // the Ktor ApplicationCall
            createTodoFormDefaultValues,
            reader = this,
            referenceSelects = mapOf(CreateTodoParams::owner to data.users.all)
        )
```

3. Render the form object.
```
call.respondHtml {
    body {
        createTodoForm.render(this)
    }
}
```


