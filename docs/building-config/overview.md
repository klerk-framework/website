---
sidebar_position: 1
---

# Overview

In order to start, Klerk must have a configuration. The configuration contains all declared rules and a few more things.

A configuration must contain at least these items:

* [Persistence](/docs/advanced-topics/persistence): How the data should be stored on disk.
* One or more [managedModels](/docs/building-config/models-types): A model class together with its state machine and
  its collections.
* [Authorization](/docs/building-config/authorization) Rules specifying who should be able to read data, issue commands etc.

It can also contain:

* [Migration](/docs/advanced-topics/migration) steps.
* One or more plugins: Tells Klerk about a plugin that should be used.
* A contextProvider: Some plugins requires a way to create a context as they will act on someone's behalf.

A configuration is built with the ConfigBuilder. It takes two type parameters: Context and Data. So before
you start building your configuration, you will have to create a Context class and Data class.
