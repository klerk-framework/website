---
sidebar_position: 4

---
# Persistence

Klerk uses an SQL database under the hood to persist the data.

## Supported databases

* SQLite
* H2
* MariaDB
* MySQL
* Oracle
* PostgreSQL
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
