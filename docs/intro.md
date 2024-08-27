---
sidebar_position: 1
---

# Getting Started

:::note
The documentation is still work in progress.
:::

Klerk is currently residing in a private repository. Ask for a token, store it on your local file system as described here:
https://docs.gitlab.com/ee/user/packages/gradle_repository/#authenticate-to-the-package-registry-with-gradle

Add this in build.gradle.kts:

```
repositories {
    maven {
        url = uri("https://gitlab.com/api/v4/projects/33843632/packages/maven")
        name = "GitLab"
        credentials(HttpHeaderCredentials::class) {
            name = "Private-Token"
            value = findProperty("gitLabPrivateToken") as String?
        }
        authentication {
            create("header", HttpHeaderAuthentication::class)
        }
    }
    ...
}
```

and

```
dependencies {
    implementation("com.prettybyte:dataframework:<version>")
    ...
}
```

Make sure you have configured the project to use Java 17 or later.


## Now what?
When developing a system using Klerk, we must:

__1. Build a configuration__: This is where you declare all rules.
```
val config = ConfigBuilder<Ctx, Data>(collections).build {
    // lots of stuff here
}
```

__2. Start Klerk__
```
val klerk = Klerk.create(config)
klerk.meta.start()
```

__3. Use Klerk__: Read data and issue commands to modify data.
```
val myBook = klerk.read(context) { get(myBookId) }
```
