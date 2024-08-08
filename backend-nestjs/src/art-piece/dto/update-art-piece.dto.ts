import { PartialType } from '@nestjs/mapped-types';
import { CreateArtPieceDto } from './create-art-piece.dto';

export class UpdateArtPieceDto extends PartialType(CreateArtPieceDto) {
    title:string;
    description:string;
    image:string;
    shown:boolean;
    link:string;
}
