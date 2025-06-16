/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common'
import { CsrService } from './csr.service'

@Controller('api/csr')
export class CsrController {
  constructor(private readonly csrService: CsrService) {}

  @Get()
  async getAll() {
    return this.csrService.findAll()
  }
}