import { Controller, Get, HttpCode, HttpStatus, Param, Post, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Redirect('https://nestjs.com', 301)
  getHello(@Param() params:any): string {
    console.log(params.id)
    return this.appService.getHello();
  }


  
  @Post()
// @HttpCode(204)
create() {
  return 'This action adds a new cat';
}
}
