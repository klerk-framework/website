---
sidebar_position: 3

---
# Security

Clerk has some properties that helps you secure the data:

* Authorization is secure by design (i.e. defaults to deny). See [Authorization](#authorization)
* As the concurrency model is serializable and all rules are evaluated immediately before an event is accepted, the
  system is protected against "time of check, time of use" (TOCTOU) flaws.
