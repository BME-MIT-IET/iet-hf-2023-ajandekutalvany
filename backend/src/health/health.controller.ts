import { Controller, Get } from '@nestjs/common';

import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { PrismaHealthIndicator } from '../prisma/PrismaHealthIndicator';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private prisma: PrismaHealthIndicator,
  ) {}

  @Get('liveness')
  @HealthCheck()
  live() {
    return this.health.check([]);
  }

  @Get('readiness')
  @HealthCheck()
  ready() {
    return this.health.check([async () => this.prisma.isHealthy('db')]);
  }
}
