/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */

const tableName = "questions"

exports.up = async (knex) => {
    return knex.schema.createTable(tableName, (table) => {
        table.bigIncrements("id").primary()
        table.string("asker").notNullable()
        table.string("body").notNullable()
        table.bigInteger("clinicId").unsigned().index().references("clinics.id").notNullable()
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists(tableName)
}
