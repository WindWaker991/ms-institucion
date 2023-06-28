import { Objects } from 'src/entities';

export class CreateBookingDto {
  create: CreateDTO;
  objectId: string;
}

class CreateDTO {
  date: Date;
  userId: string;
}
