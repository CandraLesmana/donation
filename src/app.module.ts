import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard/dashboard.controller';

@Module({
  imports: [],
  controllers: [DashboardController],
})
export class AppModule { }
