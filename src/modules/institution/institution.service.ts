import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from 'src/entities';
import { Repository } from 'typeorm';
import { CityService } from '../city/city.service';

@Injectable()
export class InstitutionService {
  constructor(
    @InjectRepository(Institution)
    private institutionRepository: Repository<Institution>,
    private cityService: CityService,
  ) {}

  async create(createInstitutionDto: CreateInstitutionDto) {
    const { cityid } = createInstitutionDto;
    const city = await this.cityService.findOne(cityid);
    const institution = this.institutionRepository.create(createInstitutionDto);
    institution.city = city;
    return await this.institutionRepository.save(institution);
  }

  async findAll() {
    return await this.institutionRepository.find({
      relations: ['city', 'sectors', 'sectors.objects'],
    });
  }

  async findOne(id: string) {
    return await this.institutionRepository.findOne({ where: { id } });
  }
}
