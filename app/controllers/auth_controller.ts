import supabase from '#start/supabase'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const authResponse = await supabase.auth.signUp({ email, password })

    if (authResponse.error) {
      return response.badRequest(authResponse.error.message)
    }

    return response.created({ authResponse })
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      return response.badRequest(error.message)
    }

    return response.ok({ token: data.session?.access_token })
  }

  async logout({ response }: HttpContext) {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return response.badRequest(error.message)
    }

    return response.ok({ message: 'Logged out successfully' })
  }
}
