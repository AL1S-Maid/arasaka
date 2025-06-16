/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CoreService } from './entities/core-services.entity'

@Injectable()
export class CoreServicesService {
  constructor(
    @InjectRepository(CoreService)
    private coreServiceRepo: Repository<CoreService>
  ) {}

  async findAll(): Promise<CoreService[]> {
    return this.coreServiceRepo.find()
  }
}