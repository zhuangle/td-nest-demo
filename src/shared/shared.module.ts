import { Global, Module, type Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApiConfigService } from './services/api-config.service';
import { GeneratorService } from './services/generator.service';
import { ValidatorService } from './services/validator.service';

const providers: Provider[] = [
  ApiConfigService,
  ValidatorService,
  GeneratorService
];

@Global()
@Module({
  providers,
  imports: [CqrsModule],
  exports: [...providers, CqrsModule],
})
export class SharedModule {}




/* 

Responsibility Segregation，简称 CQRS）设计模式。CQRS 是一种软件设计模式，它将应用程序的读取和写入操作分离，每个操作都有自己的模型和数据存储。

在 NestJS 中，CqrsModule 提供了以下功能：

事件驱动架构：通过事件发布者（Event Publisher）和事件订阅者（Event Subscribers）实现松耦合的组件通信。当你执行一个操作（比如创建一个新的资源），可以发布一个事件，其他服务或模块可以监听并响应这个事件。

命令处理器（Command Handlers）：处理特定的命令（Commands），这些命令代表对系统状态的更改。命令处理器通常会执行业务逻辑并确保数据一致性。

查询处理器（Query Handlers）：处理查询（Queries），用于获取数据。查询处理器通常不改变数据，而是返回数据的视图。

领域事件（Domain Events）：表示领域模型中发生的重要事件，可用于同步或异步地更新相关数据或通知其他系统组件。

聚合根（Aggregate Roots）：在 CQRS 中，业务逻辑通常集中在聚合根对象中，它是业务实体的容器，负责维护其内部状态的一致性。

使用 CqrsModule，开发者可以构建更清晰、更可维护的代码结构，特别是在大型、复杂的项目中，因为它有助于提高系统的可扩展性和性能。要使用这个模块，你需要在你的应用中导入它，并在模块配置中注册相关组件，如命令处理器和查询处理器。

*/