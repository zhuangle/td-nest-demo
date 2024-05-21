import { type INestApplication } from '@nestjs/common'

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication):void{
  const documentBuilder = new DocumentBuilder()
  .addBearerAuth()
  .setTitle("td-demo 接口文档")
  .setDescription('撒旦解放是垃圾分类撒法艰苦拉萨附近额外色附近的邻居撒赖咖啡碱撒老夫就撒了开发是否附件是拉动房价萨克利夫森林砍伐撒娇萨芬离开房间萨勒夫就撒了放假啊十点多了')
  .addServer('/api')

  documentBuilder.setVersion('1.0.0')
  const document = SwaggerModule.createDocument(app, documentBuilder.build())
  SwaggerModule.setup("/api-docs", app, document)
}