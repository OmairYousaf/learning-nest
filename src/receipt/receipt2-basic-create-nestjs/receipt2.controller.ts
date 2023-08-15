import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Receipt2Service } from './receipt2.service';
import { CreateReceipt2Dto } from './dto/create-receipt2.dto';
import { UpdateReceipt2Dto } from './dto/update-receipt2.dto';
import { CreateRespEntity } from './entities/receipt2.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Receipts 2')
@Controller('receipt2')
export class Receipt2Controller {
  constructor(private readonly receipt2Service: Receipt2Service) {}

  @Post()
  @ApiCreatedResponse({ type: CreateRespEntity })
  create(
    @Body() createReceipt2Dto: CreateReceipt2Dto,
  ): Promise<CreateRespEntity> {
    return this.receipt2Service.create(createReceipt2Dto);
  }

  @Get()
  findAll() {
    return this.receipt2Service.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.receipt2Service.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateReceipt2Dto: UpdateReceipt2Dto,
  // ) {
  //   return this.receipt2Service.update(+id, updateReceipt2Dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.receipt2Service.remove(+id);
  // }
}
