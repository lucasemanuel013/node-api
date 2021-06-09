import { Entity, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('clientes')
class Cliente {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Cliente }
