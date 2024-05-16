import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column()
  roleId: number

  @Column()
  state: number

  @Column()
  createTime: string

  @Column()
  updateTime: string
}
