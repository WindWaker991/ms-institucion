import { Injectable } from '@nestjs/common';
import { CreateObjectDto } from './dto/create-object.dto';
import { UpdateObjectDto } from './dto/update-object.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Objects } from '../../entities';
import { CategoryService } from '../category/category.service';
import { SectorService } from '../sector/sector.service';

@Injectable()
export class ObjectService {
  constructor(
    @InjectRepository(Objects) private objectRepository: Repository<Objects>,
    private categoryService: CategoryService,
    private SectorService: SectorService,
  ) { }

  async create(createObjectDto: CreateObjectDto) {
    const { number, categoryId, sectorId } = createObjectDto;
    const object = this.objectRepository.create({ number });
    const category = await this.categoryService.findOne(categoryId);
    const sector = await this.SectorService.findOne(sectorId);
    object.category = category;
    object.sector = sector;
    return await this.objectRepository.save(object);
  }

  async findAll() {
    return await this.objectRepository.find({ relations: ['category', 'sector'] });
  }

  findOne(id: string) {
    return `This action returns a #${id} object`;
  }

}
