/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from './roles.decorator'
import { Request } from 'express'
import { User } from '../modules/user/entities/user.entity'
import { Observable } from 'rxjs'

// 角色守卫，用于控制访问权限
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  // 检查请求是否具有所需的角色
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // 获取所需角色
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    )
    
    // 如果没有指定角色，默认允许访问
    if (!requiredRoles) return true
    // 获取请求对象
    const request = context.switchToHttp().getRequest<Request>()
    // 从请求中获取用户信息
    const user = request.user as User
    
    // 检查用户是否具有所需角色（管理员或普通用户）
    return requiredRoles.includes(user?.isAdmin ? 'admin' : 'user')
  }
}