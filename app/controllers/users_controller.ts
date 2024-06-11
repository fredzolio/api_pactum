/* eslint-disable @typescript-eslint/naming-convention */
import { HttpContext } from '@adonisjs/core/http'
import supabase from '#start/supabase'

export default class UserController {
  async index({ response }: HttpContext) {
    const { data, error } = await supabase.from('user').select('*')

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }

  async show({ params, response }: HttpContext) {
    const { id } = params
    const { data, error } = await supabase.from('user').select('*').eq('id', id).single()

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }

  async store({ request, response }: HttpContext) {
    const { name, email, cel_phone, cpf, endereco } = request.only([
      'name',
      'email',
      'cel_phone',
      'cpf',
      'endereco',
    ])
    const { data, error } = await supabase
      .from('user')
      .insert([{ name, email, cel_phone, cpf, endereco }])

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(201).send(data)
  }

  async update({ params, request, response }: HttpContext) {
    const { id } = params
    const { name, email, cel_phone, cpf, endereco } = request.only([
      'name',
      'email',
      'cel_phone',
      'cpf',
      'endereco',
    ])
    const { data, error } = await supabase
      .from('user')
      .update({ name, email, cel_phone, cpf, endereco })
      .eq('id', id)

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }

  async destroy({ params, response }: HttpContext) {
    const { id } = params
    const { data, error } = await supabase.from('user').delete().eq('id', id)

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }
}
