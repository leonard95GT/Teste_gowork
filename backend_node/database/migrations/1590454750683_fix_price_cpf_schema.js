'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FixPriceCpfSchema extends Schema {
  up () {
    this.raw('ALTER TABLE clients MODIFY federal_number varchar(20) not null')
  }

  down () {

  }

}

module.exports = FixPriceCpfSchema
