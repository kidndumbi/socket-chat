import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return { test:  'Hello World! test credentials storage!' };
  }
}
