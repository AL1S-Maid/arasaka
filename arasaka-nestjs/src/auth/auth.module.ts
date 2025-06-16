/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from '../modules/user/user.module'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'

// 认证模块，处理用户认证相关的功能
@Module({
  imports: [
    UserModule, // 导入用户模块，以便访问用户服务
    PassportModule, // 导入 Passport 模块，用于处理身份验证
    JwtModule.register({ // 注册 JWT 模块
      secret: 'secret-key', // JWT 加密密钥
      signOptions: { expiresIn: '7d' } // JWT 有效期设置为 7 天
    })
  ],
  controllers: [AuthController], // 注册认证控制器
  providers: [AuthService, JwtStrategy], // 注册认证服务和 JWT 策略
  exports: [AuthService] // 导出认证服务，以便其他模块使用
})
export class AuthModule {}