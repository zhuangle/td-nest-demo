import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Role } from './entities/role.entity'
import { Repository } from 'typeorm';
@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ){}
  async findAll(param?: any) {
    const {id, name} = param
    let queryParams = {
      id,
      name
    }
    let query = {
      where: queryParams
    }
    const total = await this.roleRepository.count(query)
    const res = await this.roleRepository.find(query)

    return {
      code: 0,
      data: res,
      count: total,
      message: "获取角色列表成功",
      success: true
    };;
  }
}
