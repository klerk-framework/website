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
            rule(::`Users in the financial department can read everything`)
        }
        negative {
        }
    }
    events {
        positive {
            rule(::`The CFO can trigger any event`)
        }
        negative {
            rule(::`Must be authenticated with multi-factor`)
        }
    }
    eventLog {
        positive {
            rule(::`Superadmin can read event log`)
        }
        negative {}
    }
}
```

As you can see above, you provide Clerk with functions that will be called when the user tries to do
something. These functions consider the request and current state and returns a decision. So Clerk uses
attribute-based access control (ABAC). If you prefer role-based access control (RBAC) you can easily implement that
with ABAC.

If your rule needs information that is not located within Clerk, it is recommended to provide that information in
the Context. In this case you would add a field called "isMultiFactorAuthenticated" to the context and use that in the
rule. It is also possible to make requests to another system over the network within your rules but be aware that this
may impact performance.
