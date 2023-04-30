import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from './health.controller';
import { PrismaHealthIndicator } from '../prisma/PrismaHealthIndicator';
import { PrismaService } from '../prisma/PrismaService';

@Module({
  imports: [TerminusModule],
  providers: [PrismaHealthIndicator, PrismaService],
  controllers: [HealthController],
})
export class HealthModule {}
