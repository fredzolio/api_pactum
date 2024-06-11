import supabase from '#start/supabase'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthMiddleware {
  async handle({ request, response }: HttpContext, next: () => Promise<void>) {
    const token = request.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      return response.unauthorized({ message: 'Não autorizado' })
    }

    const { data, error } = await supabase.auth.getUser(token)

    if (error || !data.user) {
      return response.unauthorized({ message: 'Token inválido' })
    }

    await next()
  }
}
