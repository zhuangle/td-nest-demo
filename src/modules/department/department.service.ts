import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly roleRepository: Repository<Department>
  ){}
  async findAll(param?: any) {
    let query = {}
    if(param){
      const {id, name} = param
      let queryParams = {
        id: null,
        name: null
      }
      if(id){
        queryParams.id = id
      }
      if(name){
        queryParams.name = name
      }
      query = {
        where: queryParams
      }
    }
    
    const total = await this.roleRepository.count(query)
    const res = await this.roleRepository.find(query)

    return {
      code: 0,
      data: res,
      count: total,
      message: "获取机构列表成功",
      success: true
    };;
  }
}
