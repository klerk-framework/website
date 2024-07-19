---
sidebar_position: 6

---
# Performance

Clerk is designed so that you can achieve low latencies and high read throughput without
thinking about race conditions and cache invalidation. It is recommended to not care about performance (i.e. optimize
for
code readability and simplicity) until you know for sure that performance will be a problem. Chances are that you will
never run into performance problems, but here are some suggestions if you do:

* Deploy (more) read-replicas.
* Don't hang on to read locks longer than necessary (i.e. avoid the readSuspend method).
* Create your own collections to speed up reading.
