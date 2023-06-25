import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import baseConfig from './config/base-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { CityModule } from './modules/city/city.module';
import { CategoryModule } from './modules/category/category.module';
import { ObjectModule } from './modules/object/object.module';
import { SectorModule } from './modules/sector/sector.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { BookingModule } from './modules/booking/booking.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [baseConfig],
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig,
    }),
    CityModule,
    CategoryModule,
    ObjectModule,
    SectorModule,
    InstitutionModule,
    BookingModule,

  ],
  providers: [],
})
export class AppModule { }
