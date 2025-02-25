'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoworkingPlanSchema extends Schema {
  up () {
    this.create('coworking_plans', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.decimal('value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('coworking_plans')
  }
}

module.exports = CoworkingPlanSchema
