import supabase from '#start/supabase'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { email, password, name, cel_phone, cpf, endereco } = request.only([
      'email',
      'password',
      'name',
      'cel_phone',
      'cpf',
      'endereco',
    ])

    const authResponse = await supabase.auth.signUp({ email, password })

    if (authResponse.error) {
      return response.badRequest(authResponse.error.message)
    }

    const { data, error: dbError } = await supabase
      .from('user')
      .insert([{ email, name, cel_phone, cpf, endereco }])

    if (dbError) {
      return response.badRequest(dbError.message)
    }

    return response.created({ user: data, authResponse })
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
