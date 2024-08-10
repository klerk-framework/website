---
sidebar_position: 2
---

# GraphQL

_GraphQL_ is a plugin that generates an API based on your configuration.

To install, first add graphql to your build.gradle.kts:
```
implementation("com.expediagroup:graphql-kotlin-ktor-server:$graphql_version")
```

Install GraphQL when configuring Ktor:
```
install(GraphQL) {
        schema {
            packages = listOf("com.prettybyte.clerk.graphql")
            queries = listOf(GenericQuery(clerk, GraphQLContext::context))
            mutations = listOf(EventMutationService(clerk, GraphQLContext::context))
        }
    }
```

Add routing:
```
routing {
    graphQLPostRoute()
    graphQLGetRoute()
    graphiQLRoute()
    graphQLSDLRoute()
}
```

You can now explore the API on /graphiql
