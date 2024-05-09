<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


---------------------------------------------------------------------------------
cors
 npm i cors 
 npm i @types/cors -D 
typeorm
  npm i --save @nestjs/typeorm typeorm mysql2
swagger
  npm i @nestjs/swagger swagger-ui-express


  ------------------------
  问题记录：

现在你来扮演一个技术专家，精通前端技术，后端技术，下面我来描述问题：
我在学习nestjs做服务端，前端使用vue3。但是现在遇到一个跨域问题，nestjs中配置了cors允许跨域。使用swagger调用接口时正常访问接口，在网页的控制台使用fatch("http://127.0.0.1:3000/list").then(res => console.log(res))访问正常，但是在vue3项目内调用时提示如下报错，可能是什么原因，怎么处理

Access to XMLHttpRequest at 'http://127.0.0.1:3000/api/employee' from origin 'http://localhost:3002' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.

回答：

这个错误是因为你的请求在 Vue 项目中的发起，而不是在浏览器控制台中。浏览器控制台的请求默认不携带任何认证信息（例如 cookies、HTTP 认证等），因此在 CORS 中使用 Access-Control-Allow-Origin: * 是可以的。

但是在你的 Vue 项目中，由于可能使用了认证信息（例如 cookies），因此浏览器会发送一个预检请求（preflight request）。预检请求是一种 OPTIONS 请求，用于检查实际请求是否安全。而你的 NestJS 服务器返回的 CORS 头中，Access-Control-Allow-Origin 的值是 *，而不是实际的来源。

解决这个问题的方法是，在 NestJS 中设置 Access-Control-Allow-Origin 的值为实际的来源，而不是通配符 *。你可以在 CORS 中间件配置中设置 origin 参数为你的 Vue 项目的地址（例如 http://localhost:3002）。

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CorsMiddleware } from '@nestjs/common';

@Module({
  // Your NestJS module configuration...
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
在这个示例中，CorsMiddleware 被应用到了所有路由上。你可以在 CorsMiddleware 的配置中设置 origin 参数为你的 Vue 项目的地址。

请确保将实际的 Vue 项目地址替换为你自己的地址。
