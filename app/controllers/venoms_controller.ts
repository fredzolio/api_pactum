import { HttpContext } from '@adonisjs/core/http'
import VenomService from '../services/venom_service.js'

export default class VenomController {
  async sendMessage({ request, response }: HttpContext) {
    const { to, message } = request.only(['to', 'message'])

    try {
      await VenomService.sendMessage(to, message)
      return response.status(200).send({ success: true, message: 'Message sent successfully.' })
    } catch (error) {
      return response.status(500).send({ success: false, error: 'Failed to send message.' })
    }
  }
}
