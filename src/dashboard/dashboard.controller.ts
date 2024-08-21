import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class DashboardController {
    @Get()
    viewDashboard(@Res() response: Response) {
        return response.render('index.html');
    }
}
