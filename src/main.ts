import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder().addBearerAuth().setTitle("td-demo 接口文档").setDescription('撒旦解放是垃圾分类撒法艰苦拉萨附近额外色附近的邻居撒赖咖啡碱撒老夫就撒了开发是否附件是拉动房价萨克利夫森林砍伐撒娇萨芬离开房间萨勒夫就撒了放假啊十点多了').setVersion('1').addServer('/api').build()
  const document = SwaggerModule.createDocument(app,options)
  app.use(cors())
  app.setGlobalPrefix('api')
  SwaggerModule.setup("/api-docs",app,document)
  await app.listen(3000);
}
bootstrap();