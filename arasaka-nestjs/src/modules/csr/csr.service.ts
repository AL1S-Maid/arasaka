/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Csr } from './entities/csr.entity'

@Injectable()
export class CsrService {
  constructor(
    @InjectRepository(Csr)
    private readonly csrRepo: Repository<Csr>,
  ) {}

  async findAll(): Promise<Csr[]> {
    return this.csrRepo.find()
  }
}