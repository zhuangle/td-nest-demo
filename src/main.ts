import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ApiConfigService } from './shared/services/api-config.service';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { setupSwagger } from './setup-swagger';


async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(AppModule);

  // app.use(cors())
  const corsOptions = {
    origin: 'http://localhost:3002', // 设置允许跨域的来源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true, // 允许发送身份验证凭据（例如 cookies）
  };
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3002'); // 设置允许跨域的来源
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  // 应用 CORS 中间件
  app.use(cors(corsOptions));

  setupSwagger(app);

  app.enableCors(corsOptions); // 启用 CORS 中间件
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();