import { create, Whatsapp, Message } from 'venom-bot'
import axios from 'axios'

class VenomService {
  private client: Whatsapp | null = null

  async initialize() {
    this.client = await create({
      session: 'pactum-session',
    })

    this.client.onMessage(this.handleMessage.bind(this))
  }

  private async handleMessage(message: Message) {
    if (!message.isGroupMsg) {
      const payload = {
        number: message.from,
        message: message.body,
      }

      try {
        await axios.post('https://hook.us1.make.com/c5su6k4tvum97qf39hvidmvw23jyhx68', payload)
      } catch (error) {
        console.error('Error sending message to webhook:', error)
      }
    }
  }

  async sendMessage(to: string, message: string) {
    if (!this.client) {
      throw new Error('Client not initialized')
    }
    await this.client.sendText(to, message)
  }
}

export default new VenomService()
