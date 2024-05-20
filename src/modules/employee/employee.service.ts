import { Injectable } from '@nestjs/common';
import { EmployeeListDto } from './dto/queryAll-employee.dto'
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DeleteEmployeeDto } from './dto/delete-empolyee.dto'
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository, QueryFailedError } from 'typeorm';
import { Employee } from './entities/employee.entity'

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) {}

  // 获取员工列表
  async getMeployeeList(param: any): Promise<any> {
    try {
      const { employeeCode, state, name,phone, roleId, page } = param
      const { current = 1, pageSize = 10 } = page
      let queryParams = {
        employeeCode: null,
        state: null,
        name: null,
        roleId: null,
        phone: null
      }
      if (employeeCode) {
        queryParams.employeeCode = employeeCode
      }
      if (state || state === 0) {
        queryParams.state = state
      }
      if (name) {
        queryParams.name = Like(`%${name}%`)
      }
      if(phone){
        queryParams.phone = Like(`%${phone}`)
      }
      if (roleId) {
        queryParams = { ...queryParams, roleId }
      }
      let query = {
        where: queryParams,
        relations: ['role', 'department'],
      }
      const total = await this.employeeRepository.count(query)
      const res = await this.employeeRepository.find({
        ...query,
        skip: (current - 1) * pageSize,
        take: pageSize,
        order: {
          // id: "DESC"
          id: "ASC"
        }
      })

      const data: EmployeeListDto[] = res.map(item => {
        const { password, role, department, ...rest } = item
        const emp: EmployeeListDto = {
          ...rest,
          roleName: role?.name,
          deptName: department?.name
        }
        return emp
      })
      return {
        code: 0,
        data,
        count: total,
        message: "获取员工列表成功",
        success: true
      };
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  }

  // 获取可用员工编号
  async getAvaliableEmployeeCode(): Promise<any> {
    let code = ""
    // const isCodeUnique = await 
    // const res = await this.employeeRepository.find()
    return {
      code: 0,
      data: {
        employeeCode: "1099"
      },
      message: "获取可用员工编号成功",
      success: true
    }
  }
  // // 校验工号是否空闲
  // private async isEmployeeCodeUnique(code: string):Promise<boolean> {
  //   const existingEmployee = await this.employeeRepository.findOne({
  //     where:{
  //       employeeCode: code
  //     }
  //   })

  //   return existingEmployee? true : false
  // }
  // // 生成工号
  // private async genrateCode():Promise<string>{

  //   return "1234"
  // }

  // 获取员工信息
  async getEmployeeInfo(id: number) {
    console.log('getEmployeeInfo id', id);
    return {
      code: 0,
      data: {},
      message: "获取员工信息成功",
      success: true
    }
  }

  // 更新员工信息
  async UpdateEmployee(updateEmployeeDto: UpdateEmployeeDto) {
    try {
      console.log('updateEmployeeDto', updateEmployeeDto.id, updateEmployeeDto);
      let message = ""
      let data = new Employee()
      data = {
        ...updateEmployeeDto,
        updateTime: new Date()
      }
      if (updateEmployeeDto.id) {
        console.log('修改', updateEmployeeDto.id, updateEmployeeDto);
        const res = await this.employeeRepository.update(updateEmployeeDto.id, data)
        message = "修改员工信息成功"
      } else {
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
    } catch (error) {
      if (error instanceof QueryFailedError && error.message.includes('employeeCode')) {
        // 如果错误信息包含了 'employeeCode'，说明是由于 employeeCode 重复引起的错误
        return { success: false, message: 'Employee code already exists' };
      }
      throw error;
    }
  }

  // 删除员工
  async deleteEmployee(deleteEmployeeDto: DeleteEmployeeDto) {
    console.log('deleteEmployeeDto', deleteEmployeeDto);
    const res = await this.employeeRepository.delete(deleteEmployeeDto[0])
    console.log('res', res);
    return {
      code: 0,
      data: {},
      message: "删除成功",
      success: true
    }
  }

  // 重置密码
  async resetEmployeePassword(params: any) {
    console.log('params', params);
    return {
      code: 0,
      data: {},
      message: "重置密码成功",
      success: true
    }
  }
}
