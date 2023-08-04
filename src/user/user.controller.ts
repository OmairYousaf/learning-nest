import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, ParseArrayPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { IsStringHavingValue, } from './decorator/custom-decorator';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('in post request',createUserDto)

    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('getonly/:id')
  findOne(@Param('id',new ParseIntPipe()) id: number) {
    return this.userService.findOne(+id);
  }

  @Get('getbyids')
  findByIds(@Query('ids',new ParseArrayPipe({items:Number,separator:','})) ids: number[]) {
    console.log('dddddddddd')
    return this.userService.findByIds(ids);
  }


  @Post('adduser')
  findUserByName(@Body() @IsStringHavingValue() username:any) {
    console.log(username)
    return this.userService.findUserByName(username)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}


