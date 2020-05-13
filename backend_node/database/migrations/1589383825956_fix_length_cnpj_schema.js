'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FixLengthCnpjSchema extends Schema {
  up () {
    this.raw('ALTER TABLE clients MODIFY federal_number bigint not null')
  }

  down () {}
}

module.exports = FixLengthCnpjSchema
