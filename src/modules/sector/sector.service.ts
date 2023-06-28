import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/entities';
import { Repository } from 'typeorm';
import { CityService } from '../city/city.service';
import { InstitutionService } from '../institution/institution.service';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector) private sectorRepository: Repository<Sector>,
    private institutionService: InstitutionService,
  ) { }

  async create(createSectorDto: CreateSectorDto) {
    const { institutionId } = createSectorDto;
    const institution = await this.institutionService.findOne(institutionId);
    const sector = this.sectorRepository.create(createSectorDto);
    sector.institution = institution;
    return await this.sectorRepository.save(sector);
  }

  async findAll() {

    return await this.sectorRepository.find({ relations: ['objects'] });
  }

  async findOne(id: string) {
    return await this.sectorRepository.findOne({ where: { id } });
  }
}
