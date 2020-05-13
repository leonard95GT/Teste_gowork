'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.integer('client_id').unsigned().references('id').inTable('clients').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {}
}

module.exports = AlterUserSchema
