/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("questions", (table) => {
    table.bigIncrements("id")
    table.string("asker").notNullable()
    table.string("body").notNullable()
    table.bigInteger("clinicId").notNullable().index().unsigned().references("clinics.id")

    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("questions")
}
