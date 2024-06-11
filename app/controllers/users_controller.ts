import { HttpContext } from '@adonisjs/core/http'
import supabase from '#start/supabase'

export default class UserController {
  async index({ response }: HttpContext) {
    const { data, error } = await supabase.from('users').select('*')

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }

  async show({ params, response }: HttpContext) {
    const { id } = params
    const { data, error } = await supabase.from('users').select('*').eq('id', id).single()

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }

  async store({ request, response }: HttpContext) {
    const { name, email } = request.only(['name', 'email'])
    const { data, error } = await supabase.from('users').insert([{ name, email }])

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(201).send(data)
  }

  async update({ params, request, response }: HttpContext) {
    const { id } = params
    const { name, email } = request.only(['name', 'email'])
    const { data, error } = await supabase.from('users').update({ name, email }).eq('id', id)

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }

  async destroy({ params, response }: HttpContext) {
    const { id } = params
    const { data, error } = await supabase.from('users').delete().eq('id', id)

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }
}
