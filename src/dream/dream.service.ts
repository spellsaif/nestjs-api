import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDreamDto } from './dto/create-dream.dto';
import { UpdateDreamDto } from './dto/update-dream.dto';

@Injectable()
export class DreamService {

  constructor(private prisma: PrismaService) { }

  create(createDreamDto: CreateDreamDto, userId: string) {
    try {
      const user = this.prisma.user.findFirst({
        where: {
          id: userId
        }
      })

      if (!user) {
        throw new BadRequestException()
      }

      const newDream = this.prisma.dream.create({ data: { ...createDreamDto, userId } });

      if (!newDream) {
        throw new BadRequestException()
      }

      return newDream;

    } catch (e) {
      throw new BadRequestException();
    }
  }

  findAll() {
    return `This action returns all dream`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dream`;
  }

  update(id: number, updateDreamDto: UpdateDreamDto) {
    return `This action updates a #${id} dream`;
  }

  remove(id: number) {
    return `This action removes a #${id} dream`;
  }
}
