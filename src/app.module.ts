import { ConfigService,ConfigModule } from '@nestjs/config';
import { Department } from './modules/department/entities/department.entity';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { DepartmentModule } from './modules/department/department.module';
import { RoleModule } from './modules/role/role.module';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';
import { DataSource } from 'typeorm';

import { TypeOrmModule } from '@nestjs/typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
const typeorm = TypeOrmModule.forRoot({
  type: 'mysql',
  username: "root",
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
  imports: [ 
    typeorm,
    AuthModule, 
    EmployeeModule,
    RoleModule, 
    DepartmentModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

