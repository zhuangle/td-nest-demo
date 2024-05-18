import { Controller, Get, Param, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiTags,ApiOperation } from '@nestjs/swagger';

@ApiTags('角色')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({
    tags: ['获取角色列表'],
    summary: "获取角色列表",
    description:"获取角色列表"
  })
  @Get('list')
  findAll(@Param() param: any) {
    return this.roleService.findAll(param);
  }

}
