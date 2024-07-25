---
sidebar_position: 3
---
# Collections

Each model you define will also have a corresponding collections class. This class has one or more collections, it
contains at least the `all` collection. The collections are used when retrieving data. As an example, if you have
an Invoice model and want to read all invoices:
```
clerk.read(context) { 
   val invoices = list(data.invoices.all) 
}
```

As you can see, the "all" collection for Invoice can be accessed via data.invoices.all. The "data" object is available
in the Reader, which you acquire through `clerk.read(context)`. This "data" object contains all model collection classes
and is something that you will have to create and tell the Clerk config builder about when you create the configuration:
```
val config = ConfigBuilder<Context, Data>(myData).build {
   ...
}
```

:::tip
If you are eager to get started, start with this:
```
object Data {
    val invoices = ModelCollections<Invoice, Context>()    // add one property like this for each model you have
}

val config = ConfigBuilder<Context, Data>(Data).build {
   ...
}
```
Skip the remaining of this chapter and return when you need to know more about collections.
:::

## Create your own collections

You can create your own collections and make them available in the model collections class. This is not mandatory but
can make your code more readable and performant (in later versions of Clerk). 

Let's say you frequently read invoices that have the "approved" state. Instead of writing this in many places:
```
clerk.read(context) { 
   val approvedInvoices = list(data.invoices.all) { it.state == "approved" }
}
```
you would like to access them like this:
```
clerk.read(context) { 
   val approvedInvoices = list(data.invoices.approved)
}
```
To achieve this, create your own InvoiceCollections class/object and use it in Data: 

```
object InvoiceCollections : ModelCollections<Invoice, Context>() {
    val approved = all.filter { it.state == "approved" }.register("approved")
}

object Data {
    val invoices = InvoiceCollections
}
```
