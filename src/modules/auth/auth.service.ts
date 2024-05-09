import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';


@Injectable()
export class AuthService {
  register(registerAuthDto: RegisterAuthDto) {
    console.log('registerAuthDto',registerAuthDto);
    return {
      code: 0,
      message: "注册成功",
      data: {
        userInfo: {
          id:"2039423423402i304i230423i40",
          name: "foo",
        },
      }
    };
  }
  login(loginAuthDto: LoginAuthDto) {
    console.log('loginAuthDto',loginAuthDto);
    return {
      code: 0,
      message: "登录成功",
      data: {
        userInfo: {
          id:"2039423423402i304i230423i40",
          name: "foo",
          phone:"13045678901"
        },
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      }
    };
  }
}
