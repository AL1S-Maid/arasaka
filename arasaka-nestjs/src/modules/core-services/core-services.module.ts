/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CoreServicesController } from './core-services.controller'
import { CoreServicesService } from './core-services.service'
import { CoreService } from './entities/core-services.entity'
import { DataSeedService } from '../../seeds/data-seed.service'

@Module({
  imports: [TypeOrmModule.forFeature([CoreService])],
  controllers: [CoreServicesController],
  providers: [CoreServicesService, DataSeedService],
})
export class CoreServicesModule {}