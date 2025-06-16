/* eslint-disable prettier/prettier */
import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Csr } from 'src/modules/csr/entities/csr.entity'

@Injectable()
export class DataSeedCsr implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Csr)
    private readonly csrRepo: Repository<Csr>,
  ) {}

  async onApplicationBootstrap() {
    await this.csrRepo.clear()
    await this.csrRepo.save([
      {
        id: 1,
        title: 'Environmental Protection',
        content: 'We continuously invest in renewable energy and sustainable production systems to reduce environmental impact.',
        image: 'http://localhost:3000/static/night-city.jpg',
      },
      {
        id: 2,
        title: 'Education Sponsorship',
        content: 'Arasaka funds scholarships for outstanding students in engineering and biotech across the globe.',
        image: 'http://localhost:3000/static/classroom.jpg',
      },
      {
        id: 3,
        title: 'Society',
        content: 'Provide more job opportunities and more resources.',
        image: 'http://localhost:3000/static/cyberpunk.jpg',
      },
    ])
    console.log('✅ 初始 csr 数据已插入')
  }
}