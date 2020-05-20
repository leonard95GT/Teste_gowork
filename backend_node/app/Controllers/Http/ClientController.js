'use strict'

const Client = use('App/Models/Client')

class ClientController {

  async index ({ request, response }) {
    const all = await Client.all()

    return response.status(200).send(all)
  }

  async store ({ request, response }) {
    const data = request.all()
    const result = await Client.create(data)

    return response.status(201).send(result )
  }

  async search ({ params, response }) {
    const data = params.id
    const result = await Client.find(data)

    return response.status(302).send(result) 
  }


  async update ({ params, request, response }) {
    const data = params.id
    const result = await Client.find(data)

    result.typeUser = request.input('typeUser')
    result.name = request.input('name')
    result.federal_number = request.input('federal_number')
    result.office_id = request.input('office_id')
    result.coworking_plan_id = request.input('coworking_plan_id')
    result.active = request.input('active')

    result.save()

    return response.status(202).send('updated')
  }

  async destroy ({ params, request, response }) {
    const data = params.id
    const result = await Client.find(data)

    result.delete()

    return response.status(202).send('deleted')
    
  }
}

module.exports = ClientController
