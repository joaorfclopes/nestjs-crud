import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): any {
    return {
      name: 'notes-api',
      version: '0.0.1',
      author: 'joaorfclopes',
    };
  }
}
