import { ArtPiece } from "src/art-piece/entities/art-piece.entity";
import { AbstractEntity } from "src/database/abstract.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class User extends AbstractEntity<User> {
    @Column()
    email:string;

    @Column()
    password:string;

    @OneToMany(() => ArtPiece, (artPiece) => artPiece.user, {cascade :true})
    artPieces:ArtPiece[];

}
