import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Father } from "./Father";

@Entity()
export class Children {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @ManyToOne(() => Father, father => father.childrens)
    father: Father;
}