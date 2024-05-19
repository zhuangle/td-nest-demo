import { Employee } from '../entities/employee.entity';

export class EmployeeListDto extends Employee {
  roleName?: string;
  deptName?: string;
}