/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import * as bcrypt from 'bcrypt'
// 用户服务类，用于处理与用户相关的业务逻辑
@Injectable()
export class UserService {
  constructor(
    // 注入用户实体的仓库
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}
  // 查找所有用户，只选择 id、email 和 isAdmin 字段
  async findAll(): Promise<User[]> {
    return await this.userRepo.find({ select: ['id', 'email', 'isAdmin'] })
  }
  // 创建新用户
  async create(userData: { email: string; password: string; isAdmin: boolean }): Promise<User> {
    // 生成盐值
    const salt = await bcrypt.genSalt()
    // 对密码进行哈希处理
    const hashedPassword = await bcrypt.hash(userData.password, salt)
    // 创建新用户对象
    const newUser = this.userRepo.create({
      email: userData.email,
      password: hashedPassword,
      isAdmin: userData.isAdmin
    })
    // 保存新用户到数据库
    return await this.userRepo.save(newUser)
  }
  // 根据用户 ID 删除用户
  async delete(id: string): Promise<void> {
    await this.userRepo.delete(id)
  }
  // 更新用户角色（是否为管理员）
  async updateRole(id: string, isAdmin: boolean): Promise<User | null> {
    // 更新用户的 isAdmin 字段
    await this.userRepo.update(id, { isAdmin })
    // 返回更新后的用户信息
    return this.userRepo.findOne({ where: { id: Number(id) } })
  }
  // 根据用户 ID 查找用户
  async findById(id: string | number): Promise<User | null> {
    return this.userRepo.findOne({ where: { id: Number(id) } })
  }
  // 根据用户邮箱查找用户
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { email } })
  }
}