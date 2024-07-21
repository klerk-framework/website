---
sidebar_position: 1
---

# Overview

In order to start, Clerk must have a configuration. The configuration contains all declared rules and a few more things.

A configuration must contain at least these items:

* [persistence](/docs/advanced-topics/persistence): How the data should be stored on disk.
* one or more [managedModels](/docs/building-config/models-types): A model class togeather with its state machine and
  its collection.
* [authorization](/docs/building-config/authorization) Who should be able to read data, issue commands etc.

It can also contain:

* one or more plugins: Tells Clerk about a plugin that should be used.
* A contextProvider: Some plugins requires a way to create a context as they will act on someone's behalf.

A configuration is built with the ConfigBuilder. It takes two type parameters: Context and Collections. So before
you start building your configuration, you will have to create a Context class and Collections class.
