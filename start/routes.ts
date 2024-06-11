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
router.post('/send-message', '#controller/venoms_controller.sendMessage')
router.post('register', '#controller/auth_controller.register')
router.post('login', '#controller/auth_controller.login')
router.post('logout', '#controller/auth_controller.logout').use(middleware.auth())
router
  .group(() => {
    router.get('users', '#controller/users_controller.index')
    router.get('users/:id', '#controller/users_controller.show')
    router.post('users', '#controller/users_controller.store')
    router.put('users/:id', '#controller/users_controller.update')
    router.delete('users/:id', '#controller/users_controller.destroy')
  })
  .use(middleware.auth())
