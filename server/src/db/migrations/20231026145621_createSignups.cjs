/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("signups", (table) => {
    table.bigIncrements("id")
    table.bigInteger("clinicId").notNullable().index().unsigned().references("clinics.id")
    table.bigInteger("studentId").notNullable().index().unsigned().references("students.id")
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
