import express from 'express'
import rotas from './routes'
import cors from 'cors'

import './database'

const app = express()

app.use(cors())
app.use(express.json())
app.use(rotas)

app.listen(3333, () => {
  console.log('Servidor iniciado')
})
