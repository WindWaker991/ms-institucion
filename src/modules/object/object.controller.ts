import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectService } from './object.service';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';

@Controller('object')
export class ObjectController {
  constructor(private readonly objectService: ObjectService) { }

  @Post()
  async create(@Body() createObjectDto: CreateObjectDto) {
    return await this.objectService.create(createObjectDto);
  }

  @Get()
  async findAll() {
    return await this.objectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectService.findOne(id);
  }

}
