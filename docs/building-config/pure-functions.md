---
sidebar_position: 4
---

# DSL and functions

A common theme is that you use Klerk's domain specific language (DSL) to describe the system on a high level and supply 
functions to specify the details of how the framework should behave. These functions will
be called by the framework at the appropriate times.

:::tip
Design the system top-down, i.e. start with outlining the big pieces and leave the details for later.
In Klerk, this means that you start with the DSL. Only turn your attention to the functions when you are satisfied with the specification. 
You still have to create the functions so that you can
add them in the DSL, but just put a `TODO()` in the function body for now.

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
type should be. The IDE will help you! First tell Klerk about the function in the DSL:
```
authentication {
   readModel {
      positive {
         rule(::generalsCanReadSecretReports)
         ...
```
Then ask the IDE to generate the function for you. In IntelliJ, use Alt+enter to bring up the context actions.
:::
