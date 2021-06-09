import { Request, Response } from 'express'
import { ClienteServices } from '../services/ClienteServices'

class ClienteController {

  async create(request: Request, response: Response) {
    const { nome, telefone, email } = request.body

    const clienteServices = new ClienteServices()

    try {
      const cliente = await clienteServices.create({ nome, telefone, email } )
      return response.json(cliente)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const clienteServices = new ClienteServices()

    try {
      const clientes = await clienteServices.index()
      return response.json(clientes)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const clienteServices = new ClienteServices()
    const { id } = request.params

    try {
      const cliente = await clienteServices.show(id)
      return response.json(cliente)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const clienteService = new ClienteServices()
    const { id } = request.params

    try {
      await clienteService.delete(id)
      return response.json({ message: 'Cliente deletado com sucesso' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { nome, telefone, email } = request.body
    const { id } = request.params

    const clienteServices = new ClienteServices()

    try {
      const cliente = await clienteServices.update({ id, nome, telefone, email })
      return response.json(cliente)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { ClienteController }

