import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution) private institutionRepository: Repository<Institution>,
  ) { }

  async create(createInstitutionDto: CreateInstitutionDto) {
    const institution = this.institutionRepository.create(createInstitutionDto);
    return await this.institutionRepository.save(institution);
  }

  async findAll() {
    return await this.institutionRepository.find({
      relations: ['sectors', 'sectors.objects'],
    });
  }

  async findOne(id: string) {
    return await this.institutionRepository.findOne({ where: { id } });
  }

}
