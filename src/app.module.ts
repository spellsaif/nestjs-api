import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DreamModule } from './dream/dream.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    DreamModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
