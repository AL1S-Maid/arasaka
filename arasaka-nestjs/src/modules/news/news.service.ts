/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { NewsArticle } from './entities/news.entity'

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsArticle)
    private readonly newsRepo: Repository<NewsArticle>,
  ) {}

  async findAll(): Promise<NewsArticle[]> {
    return this.newsRepo.find()
  }
}