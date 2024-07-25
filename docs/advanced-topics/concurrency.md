---
sidebar_position: 1
---

# Concurrency

As Clerk is designed to be simple, concurrency is something you can mostly ignore. However, there are
some things that can be good to know about:

Clerk defaults to [ACID](https://en.wikipedia.org/wiki/ACID)
with [serializable](https://en.wikipedia.org/wiki/Isolation_(database_systems)#Serializable) isolation. Locks are used
to ensure that the system processes
exactly one event at a time.
As events are processed sequentially, events will be enqueued if submitted when another event is being processed.
Reading is blocked during the processing of an event, ensuring strong consistency.
The reduced performance due to the locks is somewhat mitigated by
the fact that all data resides in memory. But since events are never processed
in parallel, Clerk is not able to handle massive writes.

When reading more than one thing, you probably want a guarantee that no event can occur between the reads. This is done
by acquiring a read lock. Bear in mind that if you do a lot of work while you have a read lock, the write performance of
the
system might degrade somewhat. This is usually not a problem when handling requests from other systems (e.g. responding
to an HTTP request) but pay attention to this in your [jobs](/docs/advanced-topics/jobs) where you might initiate requests over the network. It is
often
possible to fix this by first read all data, release the lock and then to perform the work.

When reading, you will get a copy of the data which you can access after the read lock has been released. This means
that as soon as you release the read lock, an event may be processed and the data you have just read may be stale. If
you need to make sure you work with fresh data you can keep the read lock until you are done with the data (although
this may impact performance).

There may be situations when you want to submit more than one event for processing. If you submit them one by one, there
is always a chance
that another event is processed in between. This can result in rejection of the subsequent events. To make sure
all-or-none
of your events will be accepted, you can submit a list of events or a function that produces events.
