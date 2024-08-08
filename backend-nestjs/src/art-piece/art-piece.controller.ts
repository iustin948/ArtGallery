import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArtPieceService } from './art-piece.service';
import { CreateArtPieceDto } from './dto/create-art-piece.dto';
import { UpdateArtPieceDto } from './dto/update-art-piece.dto';

@Controller('art-piece')
export class ArtPieceController {
  constructor(private readonly artPieceService: ArtPieceService) {}

  @Post()
  async create(@Body() createArtPieceDto: CreateArtPieceDto) {
    return await this.artPieceService.create(createArtPieceDto);
  }

  @Get()
  async findAll() {
    return await this.artPieceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.artPieceService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateArtPieceDto: UpdateArtPieceDto) {
    return  await this.artPieceService.update(+id, updateArtPieceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return  await this.artPieceService.remove(+id);
  }
}
