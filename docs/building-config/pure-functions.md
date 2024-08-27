---
sidebar_position: 4
---

# DSL and functions

In Klerk, you use the Domain Specific Language (DSL) to define your system at a high level and then implement the details through pure functions. These functions are called by the framework at the appropriate times to enforce the behavior you've specified.

For example, if you want generals to be allowed to read secret reports, you would define a rule using both the DSL and a pure function:

```
val config = ConfigBuilder<Ctx, Data>(collections).build {
    authentication {
       readModel {
          positive {
             rule(::generalsCanReadSecretReports)
          }
       }
       ...
    }
}

fun generalsCanReadSecretReports(args: ArgContextReader<Ctx, Data>): PositiveAuthorization {
    if (args.model !is Report || args.model.classification != Secret) {
        return NoOpinion
    }
    return if (args.context.user.rank == General) Allow else NoOpinion
}
```

:::tip
Design the system from the top down. Start by outlining the big pieces, leaving the details for later.
In Klerk, this means beginning with the DSL. Only turn your attention to the functions when you are satisfied with the specification.
While you will need to create the function signatures for inclusion in the DSL, you can initially leave the function bodies empty by using `TODO()` placeholders.

Klerk provides limited functionality even when the function bodies are empty. It is not possible
to read data and issue commands, but it _is_ possible to view the generated documentation in the Admin UI.
Take advantage of this: use the state diagrams to make sure the specification is accepted by all stakeholders before writing any code in the function bodies.

Since writing the function bodies and the corresponding unit tests is often straightforward, these tasks can be suitable for junior developers.
:::

## Pure functions

These functions should be [pure](https://en.wikipedia.org/wiki/Pure_function), which means:

1. the function's return value is identical for identical arguments
2. the function has no side effect

It is acceptable to use `require()`, `requireNonNull()` or similar even though they can throw `IllegalArgumentException` which
makes the
function impure. Note that the function should never actually throw, so you should only use them if you know that they
will not throw. If your function actually throws, this means that the system has a bug! The bug may not
necessarily reside in the function that throws. To exemplify: Suppose your an event triggers an update of a model. The
update function will return a new model that contains the logged in user's ID in the property `acceptedByUsers`. You
know that the update can only be triggered by an logged in user since you have added a validation rule on the triggering
event, so it is safe to have 

```
requireNonNull(args.context.loggedInUser)
```
in the update function. If the update function ever
throws an exception, you have a bug and need to figure out how context.loggedInUser could be null when
the update was triggered.

:::tip
Don't worry about remembering which parameters a function should take and what the return
type should be. The IDE will help you! First tell Klerk about the function in the DSL, then ask the IDE to generate the function for you. In IntelliJ, use Alt+enter to bring up the context actions.
:::
