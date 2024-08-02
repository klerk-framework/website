---
sidebar_position: 6

---
# Validation

In order to maintain data integrity, Clerk lets you add validation rules. These rules apply to different levels.
It is recommended to validate on the lowest level possible, i.e. validate as much as you can on the DataContainers, then
move on to the Model level and so on.

## DataContainer validation

When specifying your data types, you should also specify which values are valid. E.g. the IntContainer class allows you
to set min and max values. The StringContainer lets you add min and max length and a regex-validator. Additionally, all
container classes lets you specify a validation function, making it possible to have an EvenIntContainer class that
only allows even integers.

## Model

On this level you validate the whole model. Here you can add rules like "The user must either have a phone number or a
street address".

## Event parameters

Similar to models, you can add validation rules to considering all parameters of an event.

