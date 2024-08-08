import { Module } from '@nestjs/common';
import { ArtPieceService } from './art-piece.service';
import { ArtPieceController } from './art-piece.controller';
import { ArtPiece } from './entities/art-piece.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArtPiece,User])],    
  controllers: [ArtPieceController],
  providers: [ArtPieceService,UserService],
})
export class ArtPieceModule {}
