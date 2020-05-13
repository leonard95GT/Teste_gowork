'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with offices
 */

 const Office = use('App/Models/Office')
class OfficeController {


  //All offices
  async index ({ response }) {
    const all = await Office.all();
      return response.status(200).send(all)
  }

  async store ({ request, response }) {
    const officeData = request.all()
    const officeValue = await Office.create(officeData)
    
    return response.status(201).send(officeValue)
  }

  async search ({ params, response }) {
    const consult = params.id
    const result = await Office.find(consult)

    return response.status(200).send(result)
  }

  async update ({ params, request, response }) {
    const consult = params.id
    const result = await Office.find(consult)

    result.address = request.input('address')
    result.state = request.input('state')
    result.number_position = request.input('number_position')
    result.neighborhood = request.input('neighborhood')

    await result.save()

    return response.status(200).send('Registro alterado')
  }

  async destroy ({ params, request, response }) {
    const consult = params.id
    const result = await Office.find(consult)

    result.delete()

    return response.status(200).send('Registro excluído')
  }
}

module.exports = OfficeController
