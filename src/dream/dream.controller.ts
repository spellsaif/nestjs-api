import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/auth.guard';
import { DreamService } from './dream.service';
import { CreateDreamDto } from './dto/create-dream.dto';
import { UpdateDreamDto } from './dto/update-dream.dto';


@Controller('dream')
export class DreamController {
  constructor(private readonly dreamService: DreamService) { }

  @Post()
  @UseGuards(JwtGuard)
  create(@Req() req, @Body() createDreamDto: CreateDreamDto) {
    return this.dreamService.create(createDreamDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.dreamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dreamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDreamDto: UpdateDreamDto) {
    return this.dreamService.update(+id, updateDreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dreamService.remove(+id);
  }
}
