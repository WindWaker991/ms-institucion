import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from 'src/entities';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository:
      Repository<Booking>,
  ) { }

  async create(createBookingDto: CreateBookingDto) {
    const booking = this.bookingRepository.create(createBookingDto)
    return await this.bookingRepository.save(booking);
  }

  async findAll() {
    return await this.bookingRepository.find();
  }

  async findOne(id: string) {
    return await this.bookingRepository.findOne({
      where: {
        id
      }
    })
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  async remove(id: string) {
    return await this.bookingRepository.delete({
      id
    });
  }
}
