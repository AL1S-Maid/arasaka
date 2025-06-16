/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// 用户实体类，表示数据库中的用户表
@Entity()
export class User {
  // 主键，自动生成的用户 ID
  @PrimaryGeneratedColumn()
  id: number
  
  // 用户邮箱，必须唯一
  @Column({ unique: true })
  email: string
  
  // 用户密码
  @Column()
  password: string
  
  // 用户角色，默认值为 false（非管理员）
  @Column({ default: false })
  isAdmin: boolean
}