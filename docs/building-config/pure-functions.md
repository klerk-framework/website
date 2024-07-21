---
sidebar_position: 2
---

# Writing pure functions

A common theme is that you provide functions when you declare how the framework should behave. These functions will
be called by the framework at the appropriate times.

These functions should be [pure](https://en.wikipedia.org/wiki/Pure_function), which means:

1. the functions return values are identical for identical arguments
2. the functions have no side effects

It is acceptable to use `require()`, `requireNonNull()` or similar even though they can throw `IllegalArgumentException` which
makes the
function impure. Note that the function should never actually throw, so you should only use them if you know that they
will not throw. If your function actually throws, this means that your application has a bug! The bug may not
necessarily reside in the function that throws. To exemplify: Suppose your an event triggers an update of a model. The
update function will return a new model that contains the logged in user's ID in the property `acceptedByUsers`. You
know that the update can only be triggered by an logged in user since you have added a validation rule on the triggering
event, so it is safe to have 

```
requireNonNull(context.loggedInUser)
```
 in the update function. If the update function ever
throws an exception, you have a bug and need to figure out how context.loggedInUser could be null when
the update was triggered.