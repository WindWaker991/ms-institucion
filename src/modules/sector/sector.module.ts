import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { Sector } from '../../entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionModule } from '../institution/institution.module';

@Module({
  imports: [TypeOrmModule.forFeature([Sector]), InstitutionModule],
  controllers: [SectorController],
  providers: [SectorService],
  exports: [SectorService],
})
export class SectorModule {}
