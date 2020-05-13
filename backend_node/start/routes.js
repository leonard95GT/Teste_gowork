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
Route.get ('/office', 'OfficeController.index').middleware(['auth'])
Route.post('/office', 'OfficeController.store').middleware(['auth'])
Route.post('/office/:id', 'OfficeController.search').middleware(['auth'])
Route.patch('/office/:id', 'OfficeController.update').middleware(['auth'])
Route.delete('/office/:id', 'OfficeController.destroy').middleware(['auth'])

//Coworking plan's
Route.get ('/coworking-plan', 'CoworkingPlanController.index').middleware(['auth'])
Route.post('/coworking-plan', 'CoworkingPlanController.store').middleware(['auth'])
Route.post('/coworking-plan/:id', 'CoworkingPlanController.search').middleware(['auth'])
Route.patch('/coworking-plan/:id', 'CoworkingPlanController.update').middleware(['auth'])
Route.delete('/coworking-plan/:id', 'CoworkingPlanController.destroy').middleware(['auth'])

//office's
Route.get ('/client', 'ClientController.index').middleware(['auth'])
Route.post('/client', 'ClientController.store').middleware(['auth'])
Route.post('/client/:id', 'ClientController.search').middleware(['auth'])
Route.patch('/client/:id', 'ClientController.update').middleware(['auth'])
Route.delete('/client/:id', 'ClientController.destroy').middleware(['auth'])

//user's
Route.post('/register', 'UserController.create')
Route.post('/login', 'SessionController.login')


