/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async () => {
  return {
    System: 'Working...',
  }
})
router.post('/send-message', '#controllers/venoms_controller.sendMessage')
router.post('/register', '#controllers/auth_controller.register')
router.post('/login', '#controllers/auth_controller.login')
router.post('/logout', '#controllers/auth_controller.logout').use(middleware.auth())
router.get('/users', '#controllers/users_controller.index') //TEMP
router
  .group(() => {
    //router.get('/users', '#controllers/users_controller.index')
    router.get('/users/:id', '#controllers/users_controller.show')
    router.post('/users', '#controllers/users_controller.store')
    router.put('/users/:id', '#controllers/users_controller.update')
    router.delete('/users/:id', '#controllers/users_controller.destroy')
  })
  .use(middleware.auth())
