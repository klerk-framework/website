---
sidebar_position: 1

---

# Commands

To make any changes to the data, we issue commands. E.g:

```
val result = clerk.handle(
    Command(
        event = CreateAuthor,
        model = null,
        params = CreateAuthorParams(
            firstName = FirstName("Astrid"),
            lastName = LastName("Lindgren"),
        ),
    ),
    context,
    ProcessingOptions(CommandToken.simple()),
)
```

In the example above, we issue the command CreateAuthor with some parameters. 
Since we don´t want to execute this event on a specific model, we set `mode = null`.

When interacting with Clerk, we always provide a `context`. This includes information about who is the actor, i.e. 
on whose behalf is the command issued. This actor is among other things used when evaluating the authorization rules.

We can also see that a `ProcessingOptions` object is supplied. Here we can specify things like if the command should
really be executed or if we only want to do a dry-run (i.e. see what would happen if the command was issued for real).
In the example, only a simple `CommandToken` is provided in order to ensure idempotence.
