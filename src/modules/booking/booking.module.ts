import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { ObjectModule } from '../object/object.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities';

@Module({
  imports: [ObjectModule, TypeOrmModule.forFeature([Booking])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
