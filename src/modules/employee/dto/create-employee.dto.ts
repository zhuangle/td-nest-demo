import { PartialType } from '@nestjs/swagger';
import { UpdateEmployeeDto } from './update-employee.dto';

export class CreateEmployeeDto extends PartialType(UpdateEmployeeDto) {}