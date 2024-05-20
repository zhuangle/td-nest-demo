import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {DeleteEmployeeDto} from './dto/delete-empolyee.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('employee')
@ApiTags('Employee 员工')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // 获取员工列表
  @Post("list")
  @ApiOperation({
    tags: ['获取员工列表'],
    summary: "获取员工列表",
    description:"获取员工列表"
  })
  getMeployeeList(@Body() body:any) {
    return this.employeeService.getMeployeeList(body);
  }

  // 更新员工
  @Post('update')
  @ApiOperation({
    tags: ['更新员工'],
    summary: "更新员工",
    description:"更新员工"
  })
  UpdateEmployee(@Body() updateEmployeeDto: UpdateEmployeeDto){
    return this.employeeService.UpdateEmployee(updateEmployeeDto);
  }

  // 新增时获取可用员工账号employeeCode
  @Get('avaliableEmployeeCode')
  @ApiOperation({
    tags: ['新增时获取可用工号employeeCode'],
    summary: "新增时获取可用工号employeeCode",
    description:"新增时获取可用工号employeeCode"
  })
  getEmployeeCode() {
    return this.employeeService.getAvaliableEmployeeCode();
  }

  // 获取员工详情
  @Get(':id')
  @ApiOperation({
    tags: ['获取员工详情'],
    summary: "获取员工详情",
    description:"获取员工详情"
  })
  getEmployeeInfo(@Param('id') id: string) {
    return this.employeeService.getEmployeeInfo(+id);
  }

  // 删除员工
  @Post('del')
  @ApiOperation({
    tags: ['批量删除员工'],
    summary: "批量删除员工",
    description:"批量删除员工"
  })
  deleteEmployee(@Body() params: DeleteEmployeeDto){
    return this.employeeService.deleteEmployee(params)
  }

  @Put("resetEmployeePassword")
  @ApiOperation({
    tags: ['重置员工密码'],
    summary: "重置员工密码",
    description:"重置员工密码"
  })
  resetEmployeePassword (@Body() body:any){
    return this.employeeService.resetEmployeePassword(body)
  }
}
