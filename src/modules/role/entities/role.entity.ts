import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Employee } from '../../employee/entities/employee.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Employee, employee => employee.role)
  employees: Employee[];
}
