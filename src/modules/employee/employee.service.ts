import { Injectable, Query } from '@nestjs/common';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {DeleteEmployeeDto} from './dto/delete-empolyee.dto'
import { InjectRepository } from '@nestjs/typeorm';
import {Like, Repository} from 'typeorm';
import {Employee} from './entities/employee.entity'


@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ){}

  async getMeployeeList(param:any):Promise<any> {
    const { employeeCode, state, name, roleId, page } = param
    const { current=1, pageSize = 10 } = page
    let queryParams = {
      employeeCode: null,
      state: null, 
      name: null, 
      roleId: null
    }
    if(employeeCode){
      queryParams.employeeCode = employeeCode 
    }
    if(state || state === 0){
      queryParams.state = state
    }
    if(name){
      queryParams.name = Like(`%${name}%`)
    }
    if(roleId){
      queryParams = { ...queryParams, roleId }
    }
    let query = {
      where: queryParams,
    }
    const total = await this.employeeRepository.count(query)
    const res:Employee[] = await this.employeeRepository.find({
      ...query,
      skip: (current - 1) * pageSize,
      take: pageSize,
      order: {
        id: "DESC"
      }
    }) 
    
    const data = res.map(item => {
      const {password, ...employeeItem} = item
      return employeeItem
    })
    return {
      code: 0,
      data,
      count: total,
      message: "获取员工列表成功",
      success: true
    };
  }

  async getEmployeeInfo(id: number) {
    console.log('getEmployeeInfo id', id);
    return {
      code: 0,
      data: {},
      message: "获取员工信息成功",
      success: true
    }
  }
   
  async UpdateEmployee(updateEmployeeDto: UpdateEmployeeDto){
    console.log('updateEmployeeDto',updateEmployeeDto.id,updateEmployeeDto);
    let message = ""
    let data = new Employee()
    data = {
      ...updateEmployeeDto,
      updateTime: new Date()
    }
    if(updateEmployeeDto.id){
      console.log('修改',updateEmployeeDto.id,updateEmployeeDto);
      const res = await this.employeeRepository.update(updateEmployeeDto.id,data)
      message = "修改员工信息成功"
    }else{
      data.createTime = new Date()
      message = "新增员工信息成功"
      const res = await this.employeeRepository.save(data)
    }
    return {
      code: 0,
      data: null,
      message,
      success: true
    }
  }
  async deleteEmployee(deleteEmployeeDto: DeleteEmployeeDto){
    console.log('deleteEmployeeDto',deleteEmployeeDto);
    const res = await this.employeeRepository.delete(deleteEmployeeDto[0])
    console.log('res',res);
    return {
      code: 0,
      data: {},
      message: "删除成功",
      success: true
    }
  }
  async resetEmployeePassword(params: any){
    console.log('params',params);
    return {
      code: 0,
      data: {},
      message: "重置密码成功",
      success: true
    }
  }
}
