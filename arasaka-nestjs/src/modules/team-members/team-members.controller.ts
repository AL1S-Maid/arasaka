/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common'
import { TeamMembersService } from './team-members.service'
import { TeamMember } from './entities/team-member.entity'
// 使用 @Controller() 装饰器定义 TeamMembersController，设置路由前缀为 'team-members'
@Controller('team-members')
export class TeamMembersController {
  // 构造函数，注入 TeamMembersService
  constructor(private readonly service: TeamMembersService) {}
  // 定义 GET 请求的路由，返回所有团队成员
  @Get()
  getAll(): Promise<TeamMember[]> {
    return this.service.findAll() // 调用服务中的 findAll 方法获取团队成员
  }
}