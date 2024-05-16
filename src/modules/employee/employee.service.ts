import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {DeleteEmployeeDto} from './dto/delete-empolyee.dto'
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Employee} from './entities/employee.entity'

interface Response<T> {
  code: number,
  message: string,
  data: T,
  count: number,
  success: boolean
}

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ){}

  async getMeployeeList(param:any):Promise<Response<any>> {
    const data:Employee[] = await this.employeeRepository.find() 
    
    return {
      code: 0,
      data,
      count: data.length,
      message: "获取员工列表成功",
      success: true
    };
  }

  getEmployeeInfo(id: number) {
    console.log('getEmployeeInfo id', id);
    return {
      code: 0,
      data: {},
      message: "获取员工信息成功",
      success: true
    }
  }
   
  UpdateEmployee(updateEmployeeDto: UpdateEmployeeDto){
    console.log('updateEmployeeDto',updateEmployeeDto.id,updateEmployeeDto);
    return {
      code: 0,
      data: {},
      message: "更新员工信息成功",
      success: true
    }
  }
  deleteEmployee(deleteEmployeeDto: DeleteEmployeeDto){
    console.log('deleteEmployeeDto',deleteEmployeeDto);
    return {
      code: 0,
      data: {},
      message: "删除成功",
      success: true
    }
  }
}
