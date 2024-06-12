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
    const { cel_phone } = params
    const { data, error } = await supabase
      .from('user')
      .select('*')
      .eq('cel_phone', cel_phone)
      .single()

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
    const { cel_phone } = params
    const { name, email, cpf, endereco, thread_id } = request.only([
      'name',
      'email',
      'cpf',
      'endereco',
      'thread_id',
    ])

    const updatedData: any = {}
    if (name) updatedData.name = name
    if (email) updatedData.email = email
    if (cpf) updatedData.cpf = cpf
    if (endereco) updatedData.endereco = endereco
    if (thread_id) updatedData.thread_id = thread_id

    const { data, error } = await supabase
      .from('user')
      .update(updatedData)
      .eq('cel_phone', cel_phone)

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }

  async destroy({ params, response }: HttpContext) {
    const { cel_phone } = params
    const { data, error } = await supabase.from('user').delete().eq('cel_phone', cel_phone)

    if (error) {
      return response.status(500).send(error.message)
    }

    return response.status(200).send(data)
  }
}
