import supabase from '#start/supabase'
import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class AuthMiddleware {
  async handle({ request, response }: HttpContext, next: () => Promise<void>) {
    const token = request.header('Authorization')?.replace('Bearer ', '')

    const superToken = env.get('SUPER_TOKEN')

    if (!token) {
      return response.unauthorized({ message: 'Não autorizado' })
    }

    if (token === superToken) {
      await next()
      return
    }

    const { data, error } = await supabase.auth.getUser(token)

    if (error || !data.user || token !== 'k8aDNHlGY50AAOnE97NkuFtWVlgZ1DgMR') {
      return response.unauthorized({ message: 'Token inválido' })
    }

    await next()
  }
}
