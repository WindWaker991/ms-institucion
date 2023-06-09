import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'category'
})
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

}