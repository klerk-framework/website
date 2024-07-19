---
sidebar_position: 3
---

# Declaring state machines

Let's look at an example where we declare the flow of an invoice:

```
stateMachine {
    externalEvents {
        event(`Create invoice`, CreateInvoiceParams::class)
        event(Delete)
        event(Aprove)
        event(Pay)
    }

    voidState {
        onEvent(`Create invoice`) {
            createModel(`Waiting for approval`, ::newInvoice)
        }
    }

    state(`Waiting for approval`) {
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
