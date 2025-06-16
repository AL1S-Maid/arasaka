/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { UserService } from '../modules/user/user.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService, // 注入用户服务
    private jwtService: JwtService  // 注入 JwtService
  ) {}
  // 验证用户的电子邮件和密码
  async validateUser(email: string, pass: string) {
    // 根据电子邮件查找用户
    const user = await this.usersService.findByEmail(email)
    // 如果用户存在且密码匹配，则返回用户信息（不包括密码）
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user
      return result
    }
    return null // 如果用户不存在或密码不匹配，返回 null
  }
  // 用户登录，生成 JWT
  async login(user: any) {
    const payload = { id: user.id, email: user.email, isAdmin: user.isAdmin } // 创建有效负载
    return {
      success: true, // 登录成功
      email: user.email, // 返回用户电子邮件
      isAdmin: user.isAdmin, // 返回用户角色
      token: this.jwtService.sign(payload) // 生成 JWT
    }
  }
  // 登录或注册用户
  async loginOrRegister(email: string, password: string) {
    // 查找用户
    let user = await this.usersService.findByEmail(email)
    if (!user) {
      // 如果用户不存在，创建新用户
      const hashed = await bcrypt.hash(password, 10) // 哈希密码
      user = await this.usersService.create({ email, password: hashed, isAdmin: false })
    } else if (!(await bcrypt.compare(password, user.password))) {
      // 如果用户存在，但密码不匹配，打印相关信息
      console.log('原始密码:', password)
      console.log('数据库密码:', user.password)
      const match = await bcrypt.compare(password, user.password)
      console.log('密码匹配结果:', match)
      if (!match) {
        return { success: false, message: '密码错误' } // 返回密码错误信息
      }
    }
    // 创建有效负载并生成 JWT
    const payload = { id: user.id, email: user.email, isAdmin: user.isAdmin }
    return {
      success: true, // 登录成功
      email: user.email, // 返回用户电子邮件
      isAdmin: user.isAdmin, // 返回用户角色
      token: this.jwtService.sign(payload) // 生成 JWT
    }
  }
}
