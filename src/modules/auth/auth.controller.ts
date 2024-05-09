import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiTags,ApiQuery,ApiBody,ApiOperation, } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('register')
  @ApiOperation({
    tags: ['注册'],
    summary: "注册",
    // description: "创建路由守卫啊创建路由守卫啊创建路由守卫啊创建路由守卫啊创建路由守卫啊",
    operationId: "2131313",
  })
  register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }
  
  @Post('login')
  @ApiOperation({
    tags: ['登录'],
    summary: "登录",
    // description: "创建路由守卫啊创建路由守卫啊创建路由守卫啊创建路由守卫啊创建路由守卫啊",
    operationId: "2131313123",
  })
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}
