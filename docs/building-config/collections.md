---
sidebar_position: 3
---
# Collections

Each model you define will also have a corresponding collections object. This object has one or more collections, it
contains at least the `all` collection. The collections are used when retrieving data. As an example, if you have
an Invoice model and want to read all invoices:
```
klerk.read(context) { 
   val invoices = list(data.invoices.all) 
}
```

As you can see, the "all" collection for Invoice can be accessed via data.invoices.all. The "data" object is available
in the Reader, which you acquire through `klerk.read(context)`. This "data" object contains all model collection objects
and is something that you will have to create and tell the Klerk config builder about when you create the configuration:
```
val config = ConfigBuilder<Ctx, Data>(myData).build {
   ...
}
```

:::tip
If you are eager to get started, start with this:
```
object Data {
    val invoices = ModelCollections<Invoice, Ctx>()    // add one property like this for each model you have
}

val config = ConfigBuilder<Ctx, Data>(Data).build {
   ...
}
```
Skip the remaining of this chapter and return when you need to know more about collections.
:::

## Create your own collections

You can create your own collections and make them available in the model collections object. This is not mandatory but
can make your code more readable and allows Klerk to make some performance optimizations. 

Let's say you frequently read invoices that have the "approved" state. Instead of writing this in many places:
```
klerk.read(context) { 
   val approvedInvoices = list(data.invoices.all) { it.state == "approved" }
}
```
you would like to access them like this:
```
klerk.read(context) { 
   val approvedInvoices = list(data.invoices.approved)
}
```
To achieve this, create your own InvoiceCollections object and use it in Data: 

```
object InvoiceCollections : ModelCollections<Invoice, Ctx>() {
    val approved = all.filter { it.state == "approved" }.register("approved")
}

object Data {
    val invoices = InvoiceCollections
}
```
