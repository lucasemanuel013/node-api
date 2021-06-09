import { Router } from 'express'

import { ClienteController } from './controllers/ClienteController'

const rotas = Router();

const clienteController = new ClienteController()

rotas.get('/clientes', clienteController.index)
rotas.get('/clientes/:id', clienteController.show)

rotas.post('/clientes', clienteController.create)

rotas.delete('/clientes/:id', clienteController.delete)
rotas.put('/clientes/:id', clienteController.update)

export default rotas

