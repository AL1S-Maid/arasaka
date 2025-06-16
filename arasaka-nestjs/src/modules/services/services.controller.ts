/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common'
import { ServicesService } from './services.service'

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get('small')
  getSmallCards() {
    return this.servicesService.getCardsByType('small')
  }

  @Get('large')
  getLargeCards() {
    return this.servicesService.getCardsByType('large')
  }
}