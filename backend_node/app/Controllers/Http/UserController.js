'use strict'

const User = use('App/Models/User')

class UserController {
    async create({request}){
        const data = request.all()
        const result = await User.create(data)

        return result
    }
}

module.exports = UserController
