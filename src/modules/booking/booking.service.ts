import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from 'src/entities';
import { ObjectService } from '../object/object.service';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    private objectService: ObjectService,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    console.log(createBookingDto);
    const { objectId, create } = createBookingDto;
    const object = await this.objectService.findOne(objectId);
    const createBooking = {
      ...create,
      object: object,
    };
    const booking = this.bookingRepository.create(createBooking);
    return await this.bookingRepository.save(booking);
  }

  async findAll() {
    return await this.bookingRepository.find();
  }

  async findOne(id: string) {
    return await this.bookingRepository.findOne({
      where: {
        id,
      },
      relations: ['object'],
    });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  async remove(id: string) {
    return await this.bookingRepository.delete({
      id,
    });
  }
}
