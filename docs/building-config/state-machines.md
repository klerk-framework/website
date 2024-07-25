---
sidebar_position: 5
---

# State machines

Let's look at an example where we declare the flow of an invoice:

```
stateMachine {
    externalEvents {
        event(CreateInvoice, CreateInvoiceParams::class)
        event(Delete)
        event(Aprove)
        event(Pay)
    }

    voidState {
        onEvent(CreateInvoice) {
            createModel(WaitingForApproval, ::newInvoice)
        }
    }

    state(WaitingForApproval) {
        onEnter {
            action(::sendEmailToApprover)
        }

        onEvent(Delete) {
            delete()
        }

        onEvent(Approve) {
            transitionTo(Approved)
        }
    }

    state(Approved) {
        onEvent(Pay) {
            transitionTo(Payed)
        }

        onEvent(Delete) {
            delete()
        }
    }

    state(Payed) {
    }

}
```

We can see that:

* A new invoice can be created with the event 'Create invoice' which takes the parameters found in CreateInvoiceParams.
* The function 'newInvoice' describes what the properties of the invoice should be. The function will use
  the class CreateInvoiceParams to figure it out.
* When it is created, it has the state 'Waiting for approval' and an email is sent.
* The 'Approve' event can is only acceptable if the invoice has the state 'Waiting for approval'
* The invoice can be deleted if the invoice is either 'Waiting for approval' or 'Approved' but not 'Payed'

## Events

The events must be declared before they are used in the state machine. An event is declared as such:

1. First create an object that extends one of `VoidEventWithParameters`, `InstanceEventNoParameters` or `InstanceEventWithParameters`. E.g.
```
object CreateInvoice : VoidEventWithParameters<Book, CreateInvoiceParams>(
   forModel = Invoice::class, 
   isExternal = true,       // true makes it possible to trigger the event using a Command
   parametersClass = CreateInvoiceParams::class)
```
2. Add it in your state machine:
```
externalEvents {
        event(CreateInvoice, CreateInvoiceParams::class)
}
```

## States

Your model can have many states but at minimum you must declare a `voidState` and one instance state. The instance
is a state that an instance of your model can have. The voidState is a bit special as it represents "the model doesn't 
exist yet". Models can only be created in the voidState. 

The state names should be an enum. 

## Blocks and executables

Let's look more closely at the Approved state in the example above. There are two things, the first looks like this:
```
onEvent(Pay) {
  transitionTo(Payed)
}
```
We call this a "block". To be more specific, we can call it "a block for the 'Pay' event". We see that there is only one 
thing in the block, namely `transitionTo(Payed)`. We call this an "executable". There may be more than one executable in a
block. All executables within a block will be executed in the same transaction, so it doesn't matter in which order they are written.

The following blocks are available:
* __onEvent__: Will be triggered by an event via a `Command`.
* __onEnter__: Will be triggered when the model enters this state. Not available in voidState.
* __onExit__: Will be triggered when the model is about to exit this state.
* __atTime__: Will be triggered at a certain time unless the model has left the state.
* __after__: Will be triggered after a certain duration unless the model has left the state.

In the block, you can use these executables:
* __createModel__: Makes a model come into existence. Only possible in voidState.
* __update__: Modifies the props of a model.
* __delete__: Deletes the model.
* __transitionTo__: Makes the model transition to another state.
* __transitionWhen__: Conditional transition. E.g. "if invoice value is larger than €10000 transition to 'waiting for CFO approval'".
* __createCommands__: Create secondary commands that will be executed in the same transaction. These are normally used
to trigger other state machines. 
* __job__: Creates a [job](/docs/advanced-topics/jobs).
* __action__: Triggers a background execution of a function. Use this if you don't need any of the stuff a 
[job](/docs/advanced-topics/jobs) provides.
