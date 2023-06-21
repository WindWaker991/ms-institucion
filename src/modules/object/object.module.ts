import { Module } from '@nestjs/common';
import { ObjectService } from './object.service';
import { ObjectController } from './object.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Objects } from '../../entities';
import { CategoryModule } from '../category/category.module';
import { SectorModule } from '../sector/sector.module';

@Module({
  imports: [TypeOrmModule.forFeature([Objects]),
    CategoryModule,
    SectorModule
  ],
  controllers: [ObjectController],
  providers: [ObjectService],
  exports: [ObjectService],
})
export class ObjectModule { }
