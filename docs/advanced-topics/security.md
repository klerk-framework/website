---
sidebar_position: 3

---
# Security

Clerk has some properties that helps you secure the data:

* Clerk is secure by design, i.e. the [authorization](/docs/building-config/authorization) rules are evaluated 
automatically (unless explicitly skipped).
* Clerk is secure by default, i.e. nothing is allowed unless explicitly permitted.
* An audit log is provided out-of-the-box.
* The [authorization](/docs/building-config/authorization) configuration is granular. E.g. reading of a whole model 
and reading of a specific property in the model are two different things.
* The system you create has an attribute-based access control (ABAC). And since you write your own functions to configure 
[authorization](/docs/building-config/authorization), you can easily describe the rules as you want them. 
* As the concurrency model is serializable and all rules are evaluated immediately before an event is accepted, the
  system is protected against "time of check, time of use" (TOCTOU) flaws.
* Commands are idempotent. While not strictly a security measure, idempotence ensures that data is not modified by 
mistake.
* The form-builder (plugin) protects against Cross-site request forgery (CSRF).
