---
sidebar_position: 2

---

# Reading data

The following naming is used:

* get: throws an exception if the item doesn't exist or if the actor is
  unauthorized. Use this if you expect the model to exist and be readable by the actor.
* find: returns null if the item doesn't exist but throws if the actor is
  unauthorized. Use this when you are not sure if the model exists (but if it exists it is readable by the actor).
* list: returns a list (which can be empty if no items were found). Throws if
  the actor is unauthorized. Use this if the actor should be able to read all models.
* tryGet / tryList: returns a Failure or a Success. Never throws if there is a problem.
* -ifAuthorized: removes the item if unauthorized.

## Read one thing

The simplest way of reading a model (assuming you have a Context and a Reference to the model) is

```
val myModel = clerk.read(context) { get(id) }
```

Similarly, if you want to read a list of models:

```
val myTodos = clerk.read(context) { list(collections.todos.all()) }
```

## Read two or three things

For two things, use a Pair and destructing declaration:

```
val (first, second) = clerk.read(context) {
    Pair(get(firstId), get(secondId))
}
```

For three things, use a Triple and destructing declaration:

```
val (first, second, third) = clerk.read(context) {
    Triple(get(firstId), get(secondId), get(thirdId))
}
```

## Read many things

Use a data class to return many things at once:

```
val manyThings = clerk.read(context) {
    val todo = get(todoId)
    val owner = get(todo.props.owner)
    val someState = get(someId).state
    val numberOfTodos = list(collections.todos.all()).size

    data class ManyThings(val todo: Model<Todo>, val user: Model<User>, val someState: String, val numberOfTodos: Int)
    ManyThings(todo, owner, someState, numberOfTodos)
}
```

## Keep the lock while doing other things

It is often best to release the lock as soon as possible as performance may degrade otherwise. But if you know that
performance is not an issue, it is possible to do suspending stuff while keeping the lock using the readSuspend method.
This may lead to simpler code:

```
suspend fun renderWebPage(call: ApplicationCall) {
    ...
    clerk.readSuspend(call.context()) {
        call.respondHtml {
            body {
                h1 { +"Hello ${get(userId).props.name}" }
                +"Your Todo for today is in state: ${get(todoId).state}"
            }
        }
    }
}
```
