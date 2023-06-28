import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institution } from 'src/entities';
import { CityModule } from '../city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([Institution]), CityModule],
  controllers: [InstitutionController],
  providers: [InstitutionService],
  exports: [InstitutionService],
})
export class InstitutionModule {}
