import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import {Role} from '../../role/entities/role.entity'

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  employeeCode: string

  @Column()
  name: string

  @Column()
  gender: number

  @Column()
  dept: string

  @Column()
  phone: string

  @Column({
    default: '123456'
  })
  password?: string

  @Column()
  roleId: number

  @Column()
  state: number

  @Column()
  createTime?: Date

  @Column()
  updateTime: Date

  @OneToOne(()=> Role, (roles)=> roles.id)
  roles: Role
}
