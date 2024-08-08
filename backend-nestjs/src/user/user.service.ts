import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor( @InjectRepository(User) private userRepository: Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    const entity = new User(createUserDto);
    return await this.userRepository.save(entity);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const entity = await this.userRepository.findOneBy({id})
    this.userRepository.merge(entity,updateUserDto)
    return await this.userRepository.save(entity);
  }

  async remove(id: number) {
   return await this.userRepository.delete(id);
  }
}
