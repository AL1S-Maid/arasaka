/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('news_articles')
export class NewsArticle {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  class: string

  @Column()
  title: string

  @Column()
  txt: string

  @Column()
  by: string

  @Column()
  start: string

  @Column()
  share: string
}