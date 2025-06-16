/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ServiceCard } from './entities/service-card.entity'

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceCard)
    private readonly cardRepository: Repository<ServiceCard>
  ) {}

  getCardsByType(type: 'small' | 'large') {
    return this.cardRepository.find({ where: { type } })
  }
}