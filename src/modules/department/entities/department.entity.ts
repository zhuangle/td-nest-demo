import { Entity,PrimaryColumn,Column } from 'typeorm'

@Entity()
export class Department {
  @PrimaryColumn()
  id: string
  
  @Column()
  name: string
}
