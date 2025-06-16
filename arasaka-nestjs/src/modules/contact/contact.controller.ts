/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body } from '@nestjs/common'
import { ContactService } from './contact.service'
import { CreateContactDto } from './dto/create-contact.dto'

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() dto: CreateContactDto) {
    return await this.contactService.create(dto)
  }

  @Get()
  async findAll() {
    return await this.contactService.findAll()
  }
}