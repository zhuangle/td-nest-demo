import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Unique } from 'typeorm'
import { Role } from '../../role/entities/role.entity';
import { Department } from '../../department/entities/department.entity';

@Entity()
@Unique(['employeeCode'])
@Unique(['phone'])
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

 @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTime?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId' })
  role?: Role;

  @ManyToOne(() => Department, department => department.id)
  @JoinColumn({ name: 'dept' })
  department?: Department;
}
