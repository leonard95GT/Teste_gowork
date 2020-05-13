'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//office's
Route.get ('/office', 'OfficeController.index')
Route.post('/office', 'OfficeController.store')
Route.post('/office/:id', 'OfficeController.search')
Route.patch('/office/:id', 'OfficeController.update')
Route.delete('/office/:id', 'OfficeController.destroy')

//Coworking plan's
Route.get ('/coworking-plan', 'CoworkingPlanController.index')
Route.post('/coworking-plan', 'CoworkingPlanController.store')
Route.post('/coworking-plan/:id', 'CoworkingPlanController.search')
Route.patch('/coworking-plan/:id', 'CoworkingPlanController.update')
Route.delete('/coworking-plan/:id', 'CoworkingPlanController.destroy')

//office's
Route.get ('/client', 'ClientController.index')
Route.post('/client', 'ClientController.store')
Route.post('/client/:id', 'ClientController.search')
Route.patch('/client/:id', 'ClientController.update')
Route.delete('/client/:id', 'ClientController.destroy')

//user's
Route.post('/register', 'UserController.create')
Route.post('/login', 'SessionController.login')


