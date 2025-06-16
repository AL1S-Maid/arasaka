/* eslint-disable prettier/prettier */
import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common'
import { AuthService } from './auth.service'

// 认证控制器，处理与用户认证相关的 HTTP 请求
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {} // 注入认证服务
  // 登录接口，处理用户登录请求
  @Post('login')
  async login(@Body() body: { email: string, password: string }) {
    console.log('登录请求参数:', body) // 打印登录请求的参数
    try {
      // 调用认证服务的登录或注册方法
      const result = await this.authService.loginOrRegister(body.email, body.password)
      console.log('登录返回结果:', result) // 打印登录返回的结果
      return result // 返回结果给客户端
    } catch (error) {
      console.error('登录内部错误:', error) // 打印内部错误信息
      throw new InternalServerErrorException('服务器错误，请稍后再试') // 抛出内部服务器错误异常
    }
  }
}