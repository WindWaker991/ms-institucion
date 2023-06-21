import { Injectable } from '@nestjs/common';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sector } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector) private sectorRepository: Repository<Sector>,
  ) { }

  async create(createSectorDto: CreateSectorDto) {
    const sector = this.sectorRepository.create(createSectorDto);
    return await this.sectorRepository.save(sector);
  }

  async findAll() {
    return await this.sectorRepository.find({ relations: ['objects'] });
  }

  async findOne(id: string) {
    return await this.sectorRepository.findOne({ where: { id } });
  }

}
