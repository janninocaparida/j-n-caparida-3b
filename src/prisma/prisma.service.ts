import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  [x: string]: any;
  async onModuleInit() {
    await this.$connect();
  }
  async update(id: number, dto: Prisma.PostUpdateInput) {
    return await this.prismaService.post.update({
      where: { id: id },
      data: dto,
    });
  }
}
