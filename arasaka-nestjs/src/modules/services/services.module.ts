/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ServiceCard } from './entities/service-card.entity'
import { ServicesService } from './services.service'
import { ServicesController } from './services.controller'

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCard])],
  providers: [ServicesService],
  controllers: [ServicesController]
})
export class ServicesModule {}