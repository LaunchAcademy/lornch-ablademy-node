/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("signups", (table) => {
    table.bigIncrements("id").primary()
    table.string("asker").notNullable()
    table.string("body").notNullable()
    table.bigInteger("clinicId").unsigned().notNullable().references("clinics.id").index()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("signups")
}