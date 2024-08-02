---
sidebar_position: 9
---

# Data Migration

When your models evolve, you must migrate existing data to be compatible with the new 
model structure. This is done by creating one or more MigrationStep and applying it to 
the configuration.

A MigrationStep that renames a property can look like this:
```
object MyMigrationStep : MigrationStepV1toV1 {
    override val description = "My first migration"
    override val migratesToVersion = 2
    override fun migrateModel(original: MigrationModelV1): MigrationModelV1? =
        if (original.type == "Book") renameKey(original, "coAuthors", "changed") else original
}
```

If the function `migrateModel` returns `null`, the model is deleted.
