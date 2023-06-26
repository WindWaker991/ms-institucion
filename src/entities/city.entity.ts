import { Entity, Column, PrimaryGeneratedColumn, OneToMany, In } from 'typeorm';
import { Institution } from './institution.entity';

@Entity({
  name: 'city',
})
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Institution, (institution) => institution.city)
  institutions: Institution[];
}
