import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Sector } from './sector.entity';

@Entity({
    name: 'object'
})
export class Objects {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    number: string;

    @OneToOne(() => Category)
    category: Category;

    @ManyToOne(() => Sector, sector => sector.objects)
    sector: Sector;

}