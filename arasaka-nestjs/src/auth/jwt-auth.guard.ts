/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

// JWT 认证守卫类，扩展了 AuthGuard 以使用 JWT 策略
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}