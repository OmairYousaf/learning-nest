import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Receipt5Service } from './receipt5.service';
import { CreateReceiptDto } from './dto/create-receipt5.dto';
import { UpdateReceiptDto } from './dto/update-receipt5.dto';
import { CreateRespEntity } from './entities/receipt5.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Receipt 5')
@Controller('receipt5')
export class Receipt5Controller {
  constructor(private readonly receipt5Service: Receipt5Service) {}

  @Post()
  @ApiCreatedResponse({ type: CreateRespEntity })
  create(@Body() createReceiptDto: CreateReceiptDto): Promise<any> {
    return this.receipt5Service.create(createReceiptDto);
  }

  // @Get()
  // findAll() {
  //   return this.receipt5Service.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.receipt2Service.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
    return this.receipt5Service.update(id, updateReceiptDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.receipt2Service.remove(+id);
  // }
}
