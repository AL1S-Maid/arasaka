/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Csr } from './entities/csr.entity'
import { CsrService } from './csr.service'
import { CsrController } from './csr.controller'
import { DataSeedCsr } from 'src/seeds/data-seed.csr'

@Module({
  imports: [TypeOrmModule.forFeature([Csr])],
  controllers: [CsrController],
  providers: [CsrService, DataSeedCsr],
})
export class CsrModule {}