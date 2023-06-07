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
  ],
  providers: [],
})
export class AppModule {}
