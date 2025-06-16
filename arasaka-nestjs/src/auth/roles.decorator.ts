/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common'
// 定义角色的元数据键
export const ROLES_KEY = 'roles'
// 创建角色装饰器，用于设置所需的角色元数据
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)