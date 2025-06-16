/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { DataSource } from 'typeorm'
import { ServiceCard } from './modules/services/entities/service-card.entity'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const dataSource = app.get(DataSource)

  const repo = dataSource.getRepository(ServiceCard)
  const count = await repo.count()
  if (count === 0) {
    await repo.save([
      // Small cards
      {
        title: 'Corporate Security',
        description: 'Top-tier personnel and cyber security solutions.',
        icon: 'http://localhost:3000/static/icons/shield.png',
        type: 'small',
      },
      {
        title: 'Cyber Warfare',
        description: 'Advanced offensive and defensive cyber capabilities.',
        icon: 'http://localhost:3000/static/icons/internet.png',
        type: 'small',
      },
      {
        title: 'Weapons Systems',
        description: 'Cutting-edge tech for law enforcement and warfare.',
        icon: 'http://localhost:3000/static/icons/Ak47.png',
        type: 'small',
      },
      {
        title: 'Prosthesis Technology',
        description: '"Technology Soaring" "Nanomechanics, bro"',
        icon: 'http://localhost:3000/static/icons/prosthesis.png',
        type: 'small',
      },
      {
        title: 'Chip Technology',
        description: 'The chip technology that has been realized for implantation in the human body.',
        icon: 'http://localhost:3000/static/icons/chip.png',
        type: 'small',
      },
      {
        title: 'Medical Systems',
        description: 'Advanced medical systems.',
        icon: 'http://localhost:3000/static/icons/medical.png',
        type: 'small',
      },
      // Large cards
      {
        title: 'Corporate Security',
        description:
          'Arasaka’s elite corporate security forces are renowned for their unmatched efficiency and discipline. Trained to neutralize any threat, they embody the fusion of human vigilance and advanced surveillance technologies.',
        icon: 'http://localhost:3000/static/icons/shield.png',
        type: 'large',
      },
      {
        title: 'Cyber Warfare',
        description:
          'Arasaka dominates the digital battlefield with offensive and defensive cyberwarfare units capable of breaching any system and shielding vital networks with state-of-the-art firewalls and AI intrusion countermeasures.',
        icon: 'http://localhost:3000/static/icons/internet.png',
        type: 'large',
      },
      {
        title: 'Weapons Systems',
        description:
          'Our weapons development division delivers next-generation firearms, smart targeting systems, and autonomous combat drones — arming both corporate forces and military operations worldwide.',
        icon: 'http://localhost:3000/static/icons/Ak47.png',
        type: 'large',
      },
      {
        title: 'Prosthesis Technology',
        description:
          'We engineer biomechanical prosthetics that enhance human strength, speed, and reflexes. These cybernetic augmentations define the cutting edge of human-machine integration.',
        icon: 'http://localhost:3000/static/icons/prosthesis.png',
        type: 'large',
      },
      {
        title: 'Chip Technology',
        description:
          'Our revolutionary neural chipsets redefine cognition, memory access, and data processing. With seamless brain-computer interfaces, human potential is no longer bound by biology.',
        icon: 'http://localhost:3000/static/icons/chip.png',
        type: 'large',
      },
      {
        title: 'Medical Systems',
        description:
          'Arasaka medical technologies enable rapid tissue regeneration, bio-synthetic organ replacement, and real-time neural diagnostics, revolutionizing modern healthcare.',
        icon: 'http://localhost:3000/static/icons/medical.png',
        type: 'large',
      },
    ])
    console.log('✅ ServiceCard 初始化成功')
  }
  //跨域
  app.enableCors({
    origin: [
      'http://localhost:5173', 
      'http://localhost:5174'
    ],
    credentials: true
  })
  // 提供静态资源（如图片）
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/',
  })

  await app.listen(3000)
}
bootstrap()
