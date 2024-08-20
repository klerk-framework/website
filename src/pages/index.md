---
title: Klerk Framework
---

# Klerk Framework

Klerk is a Kotlin framework for managing data on the backend. It combines the database
and business-logic layer in a traditional system and lets you build your application on top of it. Klerk helps you build a system that is secure, 
easy to understand, avoids complexity, has fewer bugs and low latency.

Klerk is open sourced under AGPL ([commercial licenses](commercial-licence) are available).

Klerk means 'bookkeeper' in swedish.

:::note
Klerk is still in beta. This means that the API is not yet stable.
:::

## Basic ideas

The purpose of Klerk is to enable development of high quality information systems. To achieve this, Klerk is designed 
with these ideas in mind:

### Secure

_Secure by design:_
All interaction with the data goes through Klerk. This means that Klerk can guarantee that all authorization rules are
enforced. It is simply not possible for a developer to forget to check a security rule. While it is possible for a developer
to bypass a rule, these exceptions requires the developer to explicitly state that the rule should not be enforced, making
this code stand out.

_Secure by default:_
All data interaction is denied unless explicitly allowed. To be more precise: in order for a data access to be allowed,
there must exist at least one authorization rule that allows the action, and
there must not exist any rule that denies the action.

_Audit trail:_
As all information is passed through Klerk, it provides a meaningful audit trail out of the box. Not only does it record
data modification, it can also record data access.

### Easy to understand

Development in Klerk is split into a higher (design) level and a lower (details) level. On the higher level you design the system by
telling the framework about your pieces. On the lower level you describe each piece in detail. This separation allows
you to design the system without loosing yourself in the details, and it becomes easier for other developers to grasp
how the system works. It also allows Klerk to generate state diagrams and other documentation, these can be generated
even before the lower level is implemented.

It is possible (and encouraged) to start with the higher level and use the generated documentation to get the design 
approved by all stakeholders before writing any code on the lower level.

### Avoids complexity

Klerk reduces the system's complexity in two ways: it takes care of the complex stuff that can't be avoided, 
and it forces you to write simple code. As you mostly write pure functions and simple data structures, you rarely feel the 
need to write 'clever' code like layers of abstractions, multiple
inheritance, classes with lots of dependencies and other stuff that complicates the system.

The system you build can be extensive without being complex. Since the system is composed of simple pieces, the resulting system is
generally not entangled even if it is large. It is possible to look at one part and understand exactly what
that part means without knowing about the whole system. Likewise, it is possible to modify one part without affecting
other parts of the system.

One of the most important source of complexity is state, and unfortunately, information systems must handle state. Klerk
makes it easy to tame this complexity using [state machines](https://en.wikipedia.org/wiki/Finite-state_machine).

### Fewer bugs

_Consistency_: At startup, Klerk analyses the higher level design and can detect if there is an inconsistency. Similarly,
the data is verified to be consistent with the design. This makes you aware of bugs early.

_Explicit_: Klerk requires you to explicitly state validation rules, leaving less room for mistakes.

_Keep the knowledge in one place:_ In most traditional systems, both the backend and the user interface must know about 
the rules. Since Klerk understands the rules a new pattern is possible: let the UI ask Klerk about which buttons and 
fields to show. This makes it easier to keep the frontend in sync with the backend.

_Easy to test:_ Since Klerk forces you to write simple pieces of code, they are easy to test with unit tests.

_Don't write infrastructure code:_ Since Klerk takes care of most of the infrastructure in the system, you don't have 
to think about hard stuff like cache invalidation and race conditions. 

### Low latency

End users are annoyed when a system is not responding quickly to user actions. In commerce, latency may even have an impact
on revenue. Klerk responds very quickly to requests, enabling developers to build software to be proud of.


## What can you build with Klerk?
You are free to use other backend components to build
whatever you want on top of Klerk, such as

* an API (JSON, REST, GraphQL) serving your frontend
* a web application using server generated HTML
* a microservice communicating via RPC or message queues

Klerk shines when mutations can be described as domain events (e.g. "the invoice has been approved") and
when many of your business rules depends on state (e.g. "the invoice must be approved before it can be paid").

However, Klerk is not always the right choice. 
If you are building a trivial application, Klerk probably doesn't add enough value to motivate learning the framework.
Furthermore, Klerk has some limitations:

* Klerk must currently be run on a single machine. This means that it is not possible to have software redundancy to protect against
  hardware failures. It also means that Klerk is not horizontal scalable, which limits the system to a few thousand read requests per
  second on a fairly low-end server. There are plans to
  make Klerk run on multiple instances which will ensure high-availability and scaling.

* The framework is designed in such way that it never will be able to process thousands of commands
  per second, but it should be able to sustain more than 100 commands per second.

* Klerk processes all data at startup, among other things to make sure the configuration (your code) is compatible with all
  data. As a consequence, the upstart time may be noticeable if you have many millions of entities in the system.

Taken together, if you are expecting millions of concurrent users, Klerk is probably not a good fit unless you
can partition the data (e.g. single-tenant systems).


## Core concepts

### Declarative

A traditional system is built so that it (hopefully) behaves according to the specification. With Klerk it is the other way
around: you give the specification to Klerk in a semi-declarative format and Klerk will uphold the data integrity and make
sure these rules are not broken. You carefully declare your data and
the rules that your data must obey:

* Types
* Validation
* Which events are allowed when the data has a certain state
* How do the events change the data
* Who is allowed to trigger the events
* Who is allowed to read certain data
* ... and more

You declare all this using code (Kotlin). As you may know, Kotlin lends itself to making this kind of domain-specific
language (DSL). The DSL is used to describe the system on the higher level. When it comes to the details, normal Kotlin 
code is used.

Since Klerk understands the specification, you can query the framework not only for the data but also for the rules. 
The ability to query the rules can be
very useful when building a UI. Should the "Send invite" button be visible now? Let's ask the framework. Which fields
should the form contain? Klerk knows. What are the validation rules of the email field? Ask the framework. Or
just submit the fields as a dry-run command and Klerk will tell you what would happen if the command would be submitted 
for real.

This means that you only need to implement the business logic once, making it easy to keep the UI and rules in
sync. It is even possible to build an auto-generated UI that is updated as soon as you change the business logic. In
fact, Klerk comes with a built-in auto-generated admin UI. 

Other tools also take advantage of this queryable configuration. There is an auto-generated GraphQL API. Klerk also
ships with a form builder that generates HTML forms based on your data and rules.

Being able to query the rules also creates new possibilities when it comes to system documentation. It is possible
generate state diagrams which enables non-programmers to grasp how the system actually behaves. Having an up-to-date,
accessible and understandable documentation is useful for many stakeholders (e.g. product owners, customers, testers,
onboarding developers, support, sales).

### Event driven

Data is modified by sending commands to the framework which may result in one or more domain events. If you want to update the 'favoriteBook' property on a
'User' model, you will not execute an SQL update command like with most databases. Instead, you will configure the
system
so that it accepts an event called 'Set favourite book' which takes some parameter. Then you declare on which type of
model and state
the event should be available and some other stuff like validation and authorization. You also write a function which
says how the model should be changed by the event (in this case just replace the 'favoriteBook' with the event
parameter).

As mentioned, Klerk lets you use state machines to manage states safely. Each model will have its own state machine, in which
you declare the model's states. You then tell the framework
which events a certain state will accept, if there are any preconditions, and what should happen when the event is
triggered.

## Learn more

Check out the example projects and read the [documentation](/docs/intro) to get started.


