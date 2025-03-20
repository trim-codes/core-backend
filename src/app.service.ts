import { Injectable } from '@nestjs/common';
import { IGetHello } from './types';

@Injectable()
export class AppService {
  getHello(): IGetHello {
    return {
      name: 'trim-core-api',
      message: 'Hello World!',
      date: 'Sunday Mar 9, 2025',
    };
  }
}
