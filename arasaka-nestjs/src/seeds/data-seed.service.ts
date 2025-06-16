/* eslint-disable prettier/prettier */
// src/seeds/data-seed.service.ts
import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CoreService } from '../modules/core-services/entities/core-services.entity'

@Injectable()
export class DataSeedService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(CoreService)
    private readonly coreRepo: Repository<CoreService>,
  ) {}

  async onApplicationBootstrap() {
    await this.coreRepo.clear()
    await this.coreRepo.save([
      {
        title: 'Enterprise Security',
        description:
          'Since the beginning of the 21st century, our company has been equipped with the world s top security services. Customers are like gods to us, and it is our responsibility and obligation to protect the lives and property of our clients. In addition, our company also possesses the most advanced medical technology in the world to ensure the health and safety of our customers',
        image: 'http://localhost:3000/static/security.jpg',
      },
      {
        title: 'Network Security',
        description:
          'The network technology of our company is also at the top of the world. We have firewalls at the neural network level. No matter how powerful the hackers are, they cannot invade our company s network, ensuring the privacy and security of our customers',
        image: 'http://localhost:3000/static/cyber.jpg',
      },
      {
        title: 'Prosthesis Technology',
        description:
          'Our company also possesses the world s most advanced prosthetic manufacturing technology, which can be perfectly integrated into the human body, allowing everyone to experience the changes brought about by technology. Combining the limits of the human body and technology, we create the body of the future',
        image: 'http://localhost:3000/static/augments.jpg',
      },
    ])
    console.log('✅ 初始 service 数据已插入')
  }
}

 
