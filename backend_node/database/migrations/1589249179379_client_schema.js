'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.enum('typeUser', ['cnpj', 'cpf']).defaultTo('cnpj')
      table.string('name').notNullable()
      table.integer('federal_number').notNullable()
      table.integer('office_id').unsigned().references('id').inTable('offices').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('coworking_plan_id').unsigned().references('id').inTable('coworking_plans').onUpdate('CASCADE').onDelete('CASCADE')
      table.boolean('active').defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
