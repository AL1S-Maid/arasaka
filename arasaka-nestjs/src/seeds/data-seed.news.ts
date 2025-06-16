/* eslint-disable prettier/prettier */
import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { NewsArticle } from '../modules/news/entities/news.entity'

@Injectable()
export class DataSeedNews implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(NewsArticle)
    private readonly newsRepo: Repository<NewsArticle>,
  ) {}

  async onApplicationBootstrap() {
    await this.newsRepo.clear()
    await this.newsRepo.save([
      {
        class: 'a-item-1',
        title: 'The prosthetics Technology - Steinstein has been officially released',
        txt: 'The prosthetics of the Steinstein Spine have been officially released. When in use, it can significantly enhance human time perception and greatly improve human body functions',
        by: 'Arasaka Company',
        start: '863.9m',
        share: '467k'
      },
      {
        class: 'a-item-2',
        title: 'Implant chip of human',
        txt: 'The first implantable chip in the human body has been officially released, which can significantly enhance the functions of prostheses and bring out their maximum performance',
        by: '「  」',
        start: '663.2m',
        share: '202k'
      },
      {
        class: 'a-item-3',
        title: 'Ocular prosthesis - NE49',
        txt: 'Compared with other similar products, NE49 is more durable, has higher compatibility, and its performance far exceeds that of similar products. It is compatible with the latest neural network scanning system',
        by: 'Julius',
        start: '201m',
        share: '101k'
      },
      {
        class: 'a-item-4',
        title: 'Server update',
        txt: 'It adopts a brand-new architecture and cpu, which is more secure than the old version of the server. At the same time, it is equipped with the latest version of the neural network firewall',
        by: 'Arasaka Company',
        start: '940k',
        share: '96k'
      },
      {
        class: 'a-item-5',
        title: 'Position Change Instructions',
        txt: 'The position of the company’s president will be handed over to the next successor',
        by: '荒坂三郎',
        start: '833k',
        share: '78k'
      },
      {
        class: 'a-item-6',
        title: 'Position handover',
        txt: 'As of today, I will take over the positions of Chief Technology Officer and Technical Director to complete the company’s tasks',
        by: '荒坂赖宣',
        start: '603k',
        share: '40k'
      },
      {
        class: 'a-item-7',
        title: 'The prosthetics Technology - King Kong',
        txt: 'Heavy-duty exoskeleton armor, significantly enhancing attack and defense capabilities, has now completed testing',
        by: 'Arasaka Company',
        start: '400k',
        share: '18k'
      }
    ])
    console.log('✅ 初始 core_services 数据已插入')
  }
}