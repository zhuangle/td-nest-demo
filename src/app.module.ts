import { Department } from './modules/department/entities/department.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { DepartmentModule } from './modules/department/department.module';
import { RoleModule } from './modules/role/role.module';

import { TypeOrmModule } from '@nestjs/typeorm';

const typeorm = TypeOrmModule.forRoot({
  type: 'mysql',
  username: "root",
  // password: "1n2d30?[=I(76bi3374e",
  password: "safdsadfsadfpw.o3i4rkp23jrlwkejrlz",
  host: "localhost",
  port: 3306,
  database: "td-demo",
  // entities: [__dirname + '/**/*.entity{.ts, .js}'],
  entities: [__dirname + '/modules/**/*.entity{.ts, .js}'],
  synchronize: true,
  retryDelay: 500,
  retryAttempts: 10,
  autoLoadEntities: true
})

@Module({
  imports: [ typeorm, AuthModule, EmployeeModule, RoleModule, DepartmentModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

