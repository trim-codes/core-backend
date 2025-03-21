import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IGetHello } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IGetHello {
    return this.appService.getHello();
  }
}
