import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'categorySector'
})
export class CategorySector {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cant: number;

}