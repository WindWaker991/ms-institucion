import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Institution } from './institution.entity';
import { Objects } from './object.entity';

@Entity({
  name: 'sector',
})
export class Sector {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Institution, (institution) => institution.sectors)
  institution: Institution;

  @OneToMany(() => Objects, (object) => object.sector)
  objects: Objects[];
}
