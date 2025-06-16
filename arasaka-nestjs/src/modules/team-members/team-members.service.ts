/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TeamMember } from './entities/team-member.entity'
// 声明 TeamMembersService 类并标记为可注入的服务
@Injectable()
export class TeamMembersService implements OnModuleInit {
  // 构造函数，注入 TeamMember 实体的仓库
  constructor(
    @InjectRepository(TeamMember)
    private readonly repo: Repository<TeamMember>
  ) {}
  // 模块初始化时调用的方法
  async onModuleInit() {
    await this.seedInitialData() // 加载初始数据
  }
  // 查找所有团队成员
  async findAll(): Promise<TeamMember[]> {
    return this.repo.find() // 使用仓库查找所有团队成员
  }
  // 加载初始数据的方法
  async seedInitialData() {
    const count = await this.repo.count() // 统计现有团队成员的数量
    if (count === 0) { // 如果没有团队成员
      const members: Partial<TeamMember>[] = [
        { name: '「  」', description: 'COO of Arasaka', avatar: 'http://localhost:3000/static/icons/Arasaka-logo.png' },
        { name: '荒坂雀居', description: 'COO of Arasaka', avatar: 'http://localhost:3000/static/icons/Arasaka-logo.png' },
        { name: '荒坂三郎', description: 'Founder and Strategist', avatar: 'http://localhost:3000/static/icons/Arasaka-logo.png' },
        { name: '荒坂华子', description: 'Head of R&D', avatar: 'http://localhost:3000/static/icons/Arasaka-logo.png' },
        { name: '荒坂赖宣', description: 'CTO and Innovation Lead', avatar: 'http://localhost:3000/static/icons/Arasaka-logo.png' },
        { name: '荒坂美智子 V', description: 'Chief Operations Analyst', avatar: 'http://localhost:3000/static/icons/Arasaka-logo.png' },
        // 生成 3 个默认的团队成员
        ...Array.from({ length: 3 }).map(() => ({
          name: 'other',
          description: 'none',
          avatar: 'http://localhost:3000/static/icons/Arasaka-logo.png',
        })),
      ]
      await this.repo.save(members) // 保存初始团队成员数据到数据库
    }
  }
}