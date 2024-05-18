import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { ApiTags,ApiOperation } from '@nestjs/swagger';

@ApiTags('机构')

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @ApiOperation({
    tags: ['获取机构列表'],
    summary: "获取机构列表",
    description:"获取机构列表"
  })
  @Get()
  findAll() {
    return this.departmentService.findAll();
  }
}
