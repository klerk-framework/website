---
sidebar_position: 2

---
# Jobs

When processing commands, Klerk doesn't allow synchronous execution of code that has side effects. In other words: if 
you need to do something other than modifying data (e.g. sending a welcome email when a user signs up), you need to 
execute it in the background. The reason why Klerk doesn't allow 
synchronous execution is that all reads and commands are prevented during command execution, so synchronous execution can have
a significant impact on latency.

To help you with background processing, Klerk provides two executables:

__Job:__ Klerk has a built-in job manager to execute jobs reliably. It provides functions such as 
scheduling, retries, priority, rate limiting and distribution to worker nodes. You can manage your jobs in the auto-generated admin UI.

__Unmanaged job:__ A function which will be executed in a "fire-and-forget" manner. You will not be notified when it is completed.

Remember that Klerk processes the command in a transaction, so if the command fails (or is a dry-run), the job will not be executed.

### Why not an external job queue?

Why does Klerk have its own job queue when there already exist many high-quality queues? Two reasons: 

__Transactions:__
One of Klerk's core values is that it should minimize the potential for bugs. When it comes to external
job queues, a problem can occur if there is a glitch (e.g. network, hardware failure) when the 
job is created. This can result in the unfortunate situation where a command causes models to be modified but the corresponding 
job is lost (e.g. because of a network glitch). This risk can be eliminated by using the same database for models and jobs, since we
can persist the models and jobs in the same transaction. Note that we are referring to _persistence_ transactions here. 
Klerk still _process_ commands in transactions, which guarantees that the external work queue will only be invoked if the command succeeds.

__Integration:__
Since Klerk forces you to handle tasks in the background, it only fair that Klerk provides a first class support for jobs. 
And by integrating it in Klerk, the system can be built using one less external dependency, making the system less complex.

If you don't care about the persistence transaction guarantee and want to use another job queue, you should not use the _job_ executable. Instead, use the _unmanaged job_ executable and 
call your job queue. 
