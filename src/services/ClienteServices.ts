import { getCustomRepository } from 'typeorm'
import { ClienteRepository } from '../repositories/ClienteRepository'

interface CriarCliente {
  nome: string;
  telefone: string;
  email: string;
}

interface AtualizarCliente {
  id: string;
  nome: string;
  telefone: string;
  email: string;
}


class ClienteServices {

  async create({ nome, telefone, email }: CriarCliente) {

    if (!nome || !telefone || !email) {
      throw new Error('Envie todos os dados corretamente')
    }

    const clienteRepository = getCustomRepository(ClienteRepository)

    const cliente = clienteRepository.create({
      nome,
      telefone,
      email
    })

    await clienteRepository.save(cliente)

    return cliente
  }

  async index() {
    const clienteRepository = getCustomRepository(ClienteRepository)
    const clientes = await clienteRepository.find()

    return clientes;
  }

  async show(id: string) {
    const clienteRepository = getCustomRepository(ClienteRepository)

    const cliente = await clienteRepository.findOne(id)

    if (!cliente) {
      throw new Error('Nenhum Cliente com esse id foi encontrado')
    }

    return cliente;
  }

  async delete(id: string) {
    const clienteRepository = getCustomRepository(ClienteRepository)

    const cliente = await clienteRepository.findOne(id)

    if (!cliente) {
      throw new Error('Nenhum Cliente com esse id foi encontrado')
    }

    return await clienteRepository.delete(id)
  }

  async update({ id, nome, telefone, email }: AtualizarCliente) {

    if (!nome || !telefone || !email) {
      throw new Error('Envie todos os dados corretamente')
    }

    const clienteRepository = getCustomRepository(ClienteRepository)

    let cliente = await clienteRepository.findOne(id)

    if (!cliente) {
      throw new Error('Nenhum Cliente com esse id foi encontrado')
    }

    await clienteRepository.update(
      { id},
      { nome,
      telefone,
      email
      }
    )

    const clienteAtualizado = await clienteRepository.findOne(id)

    return clienteAtualizado
  }
}

export { ClienteServices }