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


@Module({
  imports: [ 
    AuthModule, 
    EmployeeModule,
    RoleModule, 
    DepartmentModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) => {
        console.log('configService.mysqlConfig',configService.mysqlConfig);
        return configService.mysqlConfig
      },
      inject: [ApiConfigService],
      dataSourceFactory: (options) => {
        if (!options) {
          throw new Error('Invalid options passed');
        }
        return Promise.resolve(
          addTransactionalDataSource(new DataSource(options)),
        );
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

