---
sidebar_position: 6
---

# Authorization

No action (read model, trigger event, read event log) is allowed unless explicitly allowed. This makes it easy to create
a system that is secure-by-design. You declare both positive and negative
authorization rules. There must be at least one positive rule that allows the action and there must be no negative
rule preventing the action. In this example, the 'Pay' event can only be triggered by the CFO when logged in with
multi-factor authentication:

```
authorizationRules {
    reads {
        positive {
            rule(::usersCanReadInvoiceItemNames)
            rule(::usersInTheFinancialDepartmentCanReadEverything)
        }
        negative {
        }
    }
    events {
        positive {
            rule(::theCFOCanTriggerAnyEvent)
        }
        negative {
            rule(::mustBeAuthenticatedWithMultiFactor)
        }
    }
    eventLog {
        positive {
            rule(::superadminCanReadEventLog)
        }
        negative {
        }
    }
}
```

As you can see above, you provide Klerk with functions that will be called when the user tries to do
something. These functions consider the request and current state and returns a decision. So Klerk uses
attribute-based access control (ABAC). If you prefer role-based access control (RBAC) you can easily implement that
with a role property on your User model.

If your rule needs information that is not located within Klerk, it is recommended to provide that information in
the Context. In this case you would add a field called "isMultiFactorAuthenticated" to the context and use that in the
rule. It is also possible to make requests to another system over the network within your rules but be aware that this
may severely impact performance.
