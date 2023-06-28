import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Controller('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) { }

  @Post()
  create(@Body() createInstitutionDto: CreateInstitutionDto) {
    return this.institutionService.create(createInstitutionDto);
  }

  @Get()
  findAll() {
    return this.institutionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.institutionService.findOne(id);
  }


}
