import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Movies {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    year: string;

    @Column()
    type: string;

    @Column()
    poster: string;

}