import { AbstractEntity } from "src/database/abstract.entity";
import { User } from "src/user/entities/user.entity";
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"

@Entity()
export class ArtPiece extends AbstractEntity<ArtPiece>{
    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    image:string;
    
    @Column()
    shown:boolean = false;

    @Column()
    link:string;

    @ManyToOne(() => User, (user) => user.artPieces)
    user:User;
}   
