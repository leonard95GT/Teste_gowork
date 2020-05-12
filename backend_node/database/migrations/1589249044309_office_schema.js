'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OfficeSchema extends Schema {
  up () {
    this.create('offices', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('offices')
  }
}

module.exports = OfficeSchema
