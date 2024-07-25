---
sidebar_position: 4

---
# Persistence

Clerk uses an SQL database under the hood to persist the data.

## Supported databases

SQLite is recommended, but Clerk should work with:

* SQLite
* H2
* MariaDB
* MySQL
* Oracle
* PostgreSQL
* Microsoft SQL Server

:::note
Clerk has not been tested thoroughly with databases other than SQLite. 
:::

## Configuration

To configure Clerk to use an SQLite database, first add a dependency to sqlite-jdbc in build.gradle.kts:
```
implementation("org.xerial:sqlite-jdbc:$sqliteJdbcVersion")
```

Now create a datasource:
```
val ds = SQLiteDataSource()
ds.url = "jdbc:sqlite:/path/to/database"
```

Create a SqlPersistence object and configure Clerk to use it:
```
val sqlitePersistence = SqlPersistence(ds)
val config = ConfigBuilder<Context, Data>(Data).build {
    persistence(sqlitePersistence)
    ...
}
```
