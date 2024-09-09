---
sidebar_position: 5

---
# Models and Types

Use data classes to declare your models. Don't start their names with 'Plugin' as that is reserved for models declared
by plugins.

When declaring your models and parameters, you can use these types:
* String
* Boolean
* Numbers (signed and unsigned)
* data classes (containing only types in this list)
* Instant (limited to years between -290308 and +294247 with microsecond resolution)
* Duration (limited to microsecond resolution)
* GeoPosition (latitude and longitude with at least 6 decimals, which translates to sub-meter precision)
* List (containing a type in this list)
* Set (containing a type in this list)

Klerk requires you to put your values in DataContainers. There are several reasons for this:

## Validation

Klerk provides several ways to ensure that your data is valid. DataContainers contains the validation rules on the 
primitive level. Describe your data using these properties:

* String:
    * minLength
    * maxLength
    * maxLines
    * regexPattern (optional)
* Numbers (Int, Long, Float etc):
    * min
    * max

If these validation methods are not sufficient, you can always supply one or more validation functions. As an example,
when validating URLs you can use the UrlValidator in Apache Commons like this:

```
val urlValidator = UrlValidator()

class WebsiteUrl(url: String) : StringContainer(url) {
    override val minLength = 5
    override val maxLength = 100

    override val validators = setOf(::validUrl)

    private fun validUrl(): InvalidParametersProblem? {
        return if (urlValidator.isValid(value)) null else InvalidParametersProblem()
    }

}
```

## Authorization

Authorization rules are enforced when you try to extract the value in the container. This means that you may be
authorized to read the User (i.e. model) but not its UserName (i.e. property). There are several methods to extract the
value. Some will throw an exception if you are not authorized, other will return null. Unless you override the toString
method, it will return [••••••] if unauthorized.

## Tags

It is possible to add tags to containers. This enables authorization rules like 'Top secret facts can only be
read by 2-star generals and above'. It also enables queries like 'Show me all info about user X but omit any
Personally Identifiable Information (PII)'.

## Types prevent mistakes

As each property will have its own container and therefore its own type, it becomes impossible to confuse parameters
when calling a function. Imagine you have a function

```
fun sendSecretInformation(email: String) {
    ...
}
```

It is possible to call this function with an email which has not yet been verified, which could conceivably
have security implications. This mistake cannot happen if we write the function like this:

```
fun sendSecretInformation(email: VerifiedEmail) {
  ...
}
```

It is therefore recommended to pass the container types around and not extract the values until they are needed.

## Add meaning

It is recommended to make your value types as meaningful as possible. Let's say you want to store information about when
we sent the last invoice to the user and we decide to represent it as epoch milliseconds using a LongContainer:

```
class LastInvoiceTime(value: Long) : LongContainer(value)
```

Representing time with a Long is not great. If someone forgets that the value should be interpreted as epoch
microseconds and instead thinks it
means 'seconds since last invoice' we are in trouble. To avoid confusion, we add a second constructor and a property:

```
class LastInvoiceTime(value: Long) : LongContainer(value) {

    constructor(instant: Instant) : this(instant.toEpochMilliseconds())

    val instant = Instant.fromEpochMilliseconds(value)
}
```

Even though Klerk thinks of LastInvoiceTime as a Long, we can now interact with it using Instants.

This concept can be extended by complementing your types with the [Measured library](https://github.com/nacular/measured) in order to help with units of
measure.