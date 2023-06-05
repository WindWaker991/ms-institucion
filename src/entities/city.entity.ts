import {Entity,Column, PrimaryGeneratedColumn, OneToMany, In} from 'typeorm';



@Entity({
    name: 'city'
})
export class City {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => City, city=> city.id)
    cities: City[];




}