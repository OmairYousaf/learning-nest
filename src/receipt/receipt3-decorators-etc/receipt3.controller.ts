import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  ParseArrayPipe,
} from '@nestjs/common';
import { Receipt3Service } from './receipt3.service';
import { CreateReceipt3Dto } from './dto/create-receipt3.dto';
import {  UpdateReceipt3Dto } from './dto/update-receipt3.dto';
import { CreateRespEntity } from './entities/receipt2.entity';
import { ApiBody, ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { IsStringHavingValue } from './decorator/custom-decorator';

@ApiTags('Receipts 3')
@Controller('receipt3')
export class Receipt3Controller {
  constructor(private readonly receipt3Service: Receipt3Service) {}

  @Post()
  @ApiCreatedResponse({ type: CreateRespEntity })
  create(
    @Body() createReceipt3Dto: CreateReceipt3Dto,
  ) {
    console.log(createReceipt3Dto)
    return this.receipt3Service.create(createReceipt3Dto);
  }

 
  @Get()
  findAll() {
    return this.receipt3Service.findAll();
  }

  // @Get()
  // find() {
  //   return this.receipt3Service.find();
  // }

  @Get('getonly/:id')
  findOne(@Param('id',new ParseIntPipe()) id: number) {
    return this.receipt3Service.findOne(+id);
  }

  @Get('getbyids')
  findByIds(@Query('ids',new ParseArrayPipe({items:Number,separator:','})) ids: number[]) {
    console.log('dddddddddd')
    return this.receipt3Service.findByIds(ids);
  }


  @Post('addreceipt')
  findUserByName(@Body() @IsStringHavingValue() user:any) {
    console.log(user)
    return this.receipt3Service.findUserByName(user)
  }


  @Patch(':id')
  createall(
    @Param('id') id:string,
    @Body() createReceipt3Dto: UpdateReceipt3Dto,
  ) {
    return 'this.receipt3Service.create(createReceipt3Dto);'
  }
 

}
