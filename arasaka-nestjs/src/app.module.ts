/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { CoreServicesModule } from './modules/core-services/core-services.module'
import { AuthModule } from './auth/auth.module'
import { User } from './modules/user/entities/user.entity'
import { UserModule } from './modules/user/user.module'
import { ServicesModule } from './modules/services/services.module'
import { ServiceCard } from './modules/services/entities/service-card.entity'
import { TeamMembersModule } from './modules/team-members/team-members.module'
import { NewsModule } from './modules/news/news.module'
import { CsrModule } from './modules/csr/csr.module'
import { ContactModule } from './modules/contact/contact.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root12345',
      database: 'arasaka',
      entities: [User, ServiceCard],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    CoreServicesModule,
    ServicesModule,
    TeamMembersModule,
    NewsModule,
    CsrModule,
    ContactModule,
    UserModule
  ],
})
export class AppModule {}
