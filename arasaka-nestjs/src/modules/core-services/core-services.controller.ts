/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common'
import { CoreServicesService } from './core-services.service'
import { CoreService } from './entities/core-services.entity'

@Controller('core-services')
export class CoreServicesController {
  constructor(private readonly service: CoreServicesService) {}

  @Get()
  getServices(): Promise<CoreService[]> {
    return this.service.findAll()
  }
}