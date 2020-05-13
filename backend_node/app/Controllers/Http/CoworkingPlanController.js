'use strict'

const CoworkingPlan = use('App/Models/CoworkingPlan')

class CoworkingPlanController {

  async index ({ response }) {
    const all = await CoworkingPlan.all();

    return response.status(200).send(all)
  }

  async store ({ request, response }) {
    const data = request.all()
    const result = await CoworkingPlan.create(data)

    return response.status(201).send(result)
  }


  async search ({ params, response }) {
    const data = params.id
    const result = await CoworkingPlan.find(data)

    return response.status(200).send(result)
  }


  async update ({ params, request, response }) {
    const data = params.id
    const result = await CoworkingPlan.find(data)

    result.name = request.input('name')
    result.value = request.input('value')

    await result.save()

    return response.status(200).send('updated')

  }


  async destroy ({ params, response }) {
    const data = params.id
    const result = await CoworkingPlan.find(data)

    result.delete()

    return response.status(200).send('deleted')

  }
}

module.exports = CoworkingPlanController
