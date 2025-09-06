---
sidebar_position: 3
---
# Views

Each model you define will also have a corresponding views object. This object has one or more views, it
contains at least the `all` view. The views are used when retrieving data. As an example, if you have
an Invoice model and want to read all invoices:
```
klerk.read(context) { 
   val invoices = list(views.invoices.all) 
}
```

As you can see, the "all" view for Invoice can be accessed via views.invoices.all. The "views" object is available
in the Reader, which you acquire through `klerk.read(context)`. This "views" object contains all model view objects
and is something that you will have to create and tell the Klerk config builder about when you create the configuration:
```
val config = ConfigBuilder<Ctx, Views>(myViews).build {
   ...
}
```

:::tip
If you are eager to get started, start with this:
```
object Views {
    val invoices = ModelViews<Invoice, Ctx>()    // add one property like this for each model you have
}

val config = ConfigBuilder<Ctx, Views>(Views).build {
   ...
}
```
Skip the remaining of this chapter and return when you need to know more about views.
:::

## Create your own views

You can create your own views and make them available in the ModelViews object. This is not mandatory but
can make your code more readable and allows Klerk to make some performance optimizations. 

Let's say you frequently read invoices that have the "approved" state. Instead of writing this in many places:
```
klerk.read(context) { 
   val approvedInvoices = list(views.invoices.all) { it.state == "approved" }
}
```
you would like to access them like this:
```
klerk.read(context) { 
   val approvedInvoices = list(views.invoices.approved)
}
```
To achieve this, create your own InvoiceViews object and use it in Views: 

```
object InvoiceViewss : ModelViews<Invoice, Ctx>() {
    val approved = all.filter { it.state == "approved" }.register("approved")
}

object Views {
    val invoices = InvoiceViews
}
```
