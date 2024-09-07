---
sidebar_position: 4

---
# Persistence

Klerk uses an SQL database under the hood to persist the data. It creates tables prefixed with `klerk_`. You are free to
use the same database if you want to store data outside Klerk, but be sure to not interfere with Klerk's tables.

## Supported databases

* SQLite
* PostgreSQL
* MariaDB
* MySQL

Unsupported (but probably works):
* H2
* Oracle
* Microsoft SQL Server

## Configuration

### SQLite
To configure Klerk to use an SQLite database, first add a dependency to sqlite-jdbc in build.gradle.kts:
```
implementation("org.xerial:sqlite-jdbc:$sqliteJdbcVersion")
```

Now create a datasource:
```
val ds = SQLiteDataSource()
ds.url = "jdbc:sqlite:/path/to/database"
```

Create a SqlPersistence object and configure Klerk to use it:
```
val sqlitePersistence = SqlPersistence(ds)
val config = ConfigBuilder<Ctx, Data>(Data).build {
    persistence(sqlitePersistence)
    ...
}
```
