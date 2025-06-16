/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Put, Body, Param, UseGuards, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { JwtAuthGuard } from '../../auth/jwt-auth.guard'
import { RolesGuard } from '../../auth/roles.guard'
import { Roles } from '../../auth/roles.decorator'

// 用户控制器，处理与用户相关的 HTTP 请求
@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard) // 使用 JWT 认证和角色守卫进行保护
export class UserController {
  constructor(private readonly userService: UserService) {}
  // 获取所有用户，只有管理员可以访问
  @Roles('admin')
  @Get()
  async findAllUsers(@Req() req) {
    console.log(req.user) // 打印请求中的用户信息
    return await this.userService.findAll() // 调用用户服务获取所有用户
  }
  // 创建新用户，只有管理员可以访问
  @UseGuards(JwtAuthGuard, RolesGuard) // 再次应用守卫
  @Roles('admin')
  @Post()
  async createUser(@Body() body: { email: string; password: string; isAdmin: boolean }) {
    return await this.userService.create(body) // 调用用户服务创建新用户
  }
  // 根据用户 ID 删除用户，只有管理员可以访问
  @UseGuards(JwtAuthGuard, RolesGuard) // 再次应用守卫
  @Roles('admin')
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.delete(id) // 调用用户服务删除用户
  }
  // 根据用户 ID 更新用户角色，只有管理员可以访问
  @UseGuards(JwtAuthGuard, RolesGuard) // 再次应用守卫
  @Roles('admin')
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: { isAdmin: boolean }) {
    return await this.userService.updateRole(id, body.isAdmin) // 调用用户服务更新用户角色
  }
}