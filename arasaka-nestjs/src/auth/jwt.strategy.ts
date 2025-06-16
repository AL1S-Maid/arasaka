/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

// JWT 策略类，用于验证 JWT 的有效性
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 从请求的 Authorization 头中提取 Bearer 令牌
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 不忽略过期时间
      ignoreExpiration: false,
      // JWT 密钥，与 JwtModule 中的密钥保持一致
      secretOrKey: 'secret-key',
    })
  }
  // 验证有效负载，返回用户信息
  async validate(payload: any) {
    return { id: payload.id, email: payload.email, isAdmin: payload.isAdmin }
  }
}