---
title: Klerk
---

# Klerk

Klerk is Kotlin framework for managing data on the JVM. It replaces the database
and
business-logic code layer in a traditional system. You are free to use other backend components to build
whatever you want on top of Klerk, such as

* an API (JSON, REST, GraphQL) serving your frontend
* a web app using server generated HTML
* a microservice communicating via RPC or message queues

Klerk is open sourced under AGPL ([commercial licenses](commercial-licence) are available).

Klerk means 'bookkeeper' in swedish.

:::note
Klerk is still in alpha. This means that the API is not yet stable.
:::

## Basic ideas

The purpose of Klerk is to enable development of high quality information systems. To achieve this, Klerk is designed 
with these ideas in mind:

### Declarative

When using Klerk you first carefully declare your data and the rules that your data must obey:

* Types
* Validation
* Which events are allowed when the data has a certain state
* How do the events change the data
* Who is allowed to trigger the events
* Who is allowed to read certain data
* ... and more

You declare all this using code (Kotlin) and give the rules to Klerk.
It is now the responsibility of the framework to uphold the data integrity and make
sure these rules are not broken.

You can query the framework, not only for the data but also for the rules. The ability to query the rules can be
very useful when building a UI. Should the "Send invite" button be visible now? Let's ask the framework. Which fields
should the form contain? The framework knows. What are the validation rules of the email field? Ask the framework. Or
just submit the fields as a dry-run event and the framework will tell you if there is any problem with the submitted
data.

This means that you only need to implement the business logic once, making it easy to keep the UI and rules in
sync. It is even possible to build an auto-generated UI that is updated as soon as you change the business logic. In
fact, Klerk comes with a built-in auto-generated admin UI and some other UI tools (e.g. an HTML form builder).

Being able to query the rules also creates new possibilities when it comes to system documentation. It is possible
generate state diagrams which enables non-programmers to grasp how the system actually behaves. Having an up-to-date,
accessible and understandable documentation is useful for many stakeholders (e.g. product owners, customers, testers,
onboarding developers, support, sales).

Another benefit of this declarative approach is that Klerk can analyze the configuration and find
problems at startup. This reduces the risk of bugs showing up in production.

### Simple

Klerk encourages you to write simple code. As you mostly write data structures and pure functions and use these
to declare your rules, you rarely feel the need to write 'clever' code like layers of abstractions, multiple
inheritance, classes with lots of dependencies and other stuff that complicates the system.

Systems build with Klerk are simple. Note that _simple_ means _the opposite of complex_, not _small_ or _limited_; It is
perfectly fine to build large systems with Klerk. One of the most important source of complexity is state. 
Unfortunately, information systems must handle state.
Klerk aims to make state as simple as possible. So what we mean when say that systems build with Klerk are simple, we
mean that the parts are not entangled. It is perfectly possible to look at one part and understand exactly what
that part means without knowing about the whole system. Likewise, it is possible to modify one part without affecting
other parts of the system.

As a developer, this simplicity means that you don't have to think about hard stuff like cache invalidation and race
conditions (see [concurrency](/docs/advanced-topics/concurrency)).

### Event driven

Data is changed by sending events to the framework. If you want to update the 'favoriteBook' property on a
'User' model, you will not execute an SQL update command like with most databases. Instead, you will configure the
system
so that it accepts an event called 'Set favourite book' which takes some parameter. Then you declare on which type of
model
the event should be available and some other stuff like validation and authorization. You also write a function which
says how the model should be changed by the event (in this case just replace the 'favoriteBook' with the event
parameter).

As the data is changed via events, Klerk will automatically generate an audit log.

As mentioned, much of the complexity in a system is related to state. Klerk lets you use [state machines](https://en.wikipedia.org/wiki/Finite-state_machine) to manage states 
safely. You will declare a state machine for each of your models. You design the model's states and tell the framework
which events a certain state will accept, if there are any preconditions, and what should happen when the event is
triggered.

### Secure by design
All interaction with the data goes through Klerk. This means that Klerk can guarantee that all authorization rules are 
enforced. It is simply not possible for a developer to forget to check a security rule. While it is possible for a developer 
to bypass a rule, these exceptions requires the developer to explicitly state that the rule should not be enforced, making 
this code stand out.

### Secure by default
All data interaction is denied unless explicitly allowed. To be more precise: in order for a data access to be allowed, 
there must exist at least one [authorization rule](/docs/building-config/authorization) that allows the action, and 
there must not exist any rule that denies the action. 

## When is Klerk a good fit?

Klerk can help you manage the complexity in a system. But if you are building a trivial application, Klerk probably doesn't add enough value to motivate the learning. 

Klerk shines when mutations can be described as domain events (e.g. "the invoice has been approved") and
when many of your business rules depends on state (e.g. "the invoice must be approved before it can be paid").

However, Klerk has some limitations: 

* Clerk is not horizontal scalable (yet). That said, the
  framework should be able to handle more than 1000 read requests per second.

* The framework is designed in such way that it never will be able to process thousands of events
  per second, but it should be able to sustain more than 100 events per second.

* As Clerk keeps all data in memory, it is not recommended to store images etc. in it. Note that it is possible to
let Clerk handle a subset of your data, so it is possible use Clerk for most data but handle images in a separate way.

Taken together, if you are expecting millions of concurrent users, Clerk is probably not a good fit unless you
can partition the data (e.g. single-tenant systems).
