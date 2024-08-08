import { Injectable } from '@nestjs/common';
import { CreateArtPieceDto } from './dto/create-art-piece.dto';
import { UpdateArtPieceDto } from './dto/update-art-piece.dto';
import { EntityManager, Repository } from 'typeorm';
import { ArtPiece } from './entities/art-piece.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { createReadStream } from 'fs';

@Injectable()
export class ArtPieceService {
  constructor(
    private entityManager: EntityManager,
    @InjectRepository(ArtPiece)
    private artPieceRepository: Repository<ArtPiece>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createArtPieceDto: CreateArtPieceDto) {
    //mapping to entity
    const artEntity = this.artPieceRepository.create(createArtPieceDto);

    // extracting userId from dto
    const userId = createArtPieceDto.userId; 
    console.log(userId);
    // retrieving user by userId
    const user =  await this.userRepository.findOneBy({id:userId}) 

     // asigning user to art piece entity
    artEntity.user = user;

    // saving the final result
    await this.artPieceRepository.save(artEntity);
    return await this.artPieceRepository.findOne({ where: { id: artEntity.id } });
  }

  async findAll() {
    return await this.artPieceRepository.find();
  }

  async findOne(id: number) {
    return await this.artPieceRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateArtPieceDto: UpdateArtPieceDto) {
    const entity = await this.artPieceRepository.findOneBy({id})
    this.artPieceRepository.merge(entity,updateArtPieceDto)
    await this.artPieceRepository.update(id,entity);
    return await this.artPieceRepository.findOneBy({id});
  }

  async remove(id: number) {
      return this.artPieceRepository.delete(id);
  }
}
