/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { UserService } from './user.service'
import { UserController } from './user.controller'

@Module({
  // 导入 TypeORM 模块并注册 User 实体
  imports: [TypeOrmModule.forFeature([User])],
  // 注册用户控制器，用于处理用户相关的 HTTP 请求
  controllers: [UserController],
  // 注册用户服务，提供用户相关的业务逻辑
  providers: [UserService],
  // 导出用户服务，以便其他模块可以使用
  exports: [UserService],
})
export class UserModule {}