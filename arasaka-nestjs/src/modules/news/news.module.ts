/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NewsArticle } from './entities/news.entity'
import { NewsService } from './news.service'
import { NewsController } from './news.controller'
import { DataSeedNews } from 'src/seeds/data-seed.news'

@Module({
  imports: [TypeOrmModule.forFeature([NewsArticle])],
  controllers: [NewsController],
  providers: [NewsService, DataSeedNews],
  exports: [TypeOrmModule],
})
export class NewsModule {}