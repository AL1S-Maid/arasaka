/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Contact } from './entities/contact.entity'
import { CreateContactDto } from './dto/create-contact.dto'

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>
  ) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const contact = this.contactRepository.create(createContactDto)
    return await this.contactRepository.save(contact)
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find({ order: { createdAt: 'DESC' } })
  }
}