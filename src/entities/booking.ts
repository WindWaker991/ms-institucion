import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Objects } from './object.entity';

@Entity({
  name: 'booking',
})
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @Column()
  schedule: string;

  @Column()
  userId: string;

  @OneToOne(() => Objects, (object) => object)
  objectId: Objects;
}
