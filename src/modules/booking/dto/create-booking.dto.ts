import { Objects } from 'src/entities';

export class CreateBookingDto {
  create: CreateDTO;
  objectId: string;
}

class CreateDTO {
  date: Date;
  schedule: string;
  userId: string;
}
