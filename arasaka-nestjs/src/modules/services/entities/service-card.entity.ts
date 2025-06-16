/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('service_cards')
export class ServiceCard {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column('text')
  description: string

  @Column()
  icon: string

  @Column()
  type: 'small' | 'large' // 用来区分卡片类型
}