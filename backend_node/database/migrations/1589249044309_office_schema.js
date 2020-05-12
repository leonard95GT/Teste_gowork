'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OfficeSchema extends Schema {
  up () {
    this.create('offices', (table) => {
      table.increments()
      table.string('address').notNullable()
      table.string('state').notNullable()
      table.integer('number_position').notNullable()   
      table.string('neighborhood').notNullable()   
      table.timestamps()
    })
  }

  down () {
    this.drop('offices')
  }
}

module.exports = OfficeSchema
