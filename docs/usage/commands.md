---
sidebar_position: 1

---

# Commands

To make any changes to the data, we issue commands. E.g:

```
val result = klerk.handle(
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

When interacting with Klerk, we always provide a [context](/docs/building-config/context). This includes information about who is the actor, i.e. 
on whose behalf is the command issued. This actor is among other things used when evaluating the authorization rules.

# Options

A `ProcessingOptions` object must be supplied. 

### Idempotence

A command token is required. This token can ensures that the command is only executed if some
preconditions are fulfilled. In the example above, a simple `CommandToken` is provided, this 
ensures idempotence (i.e. prevents the same command from occurring more than once).

A more advanced token can be used to make sure that the command is only accepted if some data
is unchanged since the token was created.

### Dry run

If a command is issued with `CommandOption(dryRun = true)`, the command is evaluated, but it will have no effect. This 
can be used to see what would happen if the command would be issued for real. The response will contain the updated
models as normal but will not be persisted. Also note that none of the actions or jobs will be executed.
