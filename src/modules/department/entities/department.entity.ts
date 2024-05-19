import { Entity,PrimaryColumn,Column,OneToMany } from 'typeorm'
import { Employee } from '../../employee/entities/employee.entity';

@Entity()
export class Department {
  @PrimaryColumn()
  id: string
  
  @Column()
  name: string

  @OneToMany(() => Employee, employee => employee.department)
  employees: Employee[];
}
