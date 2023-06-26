import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
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
  userId: string;

  @OneToOne(() => Objects, (object) => object)
  @JoinColumn()
  object: Objects;
}
