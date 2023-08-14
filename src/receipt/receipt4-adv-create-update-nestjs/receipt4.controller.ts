import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Receipt4Service } from './receipt4.service';
import { CreateReceipt4Dto } from './dto/create-receipt4.dto';
import { UpdateReceipt4Dto } from './dto/update-receipt4.dto';
import { CreateRespEntity } from './entities/receipt2.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Receipt 4')
@Controller('receipt4')
export class Receipt4Controller {
  constructor(private readonly receipt4Service: Receipt4Service) {}

  @Post()
  @ApiCreatedResponse({ type: CreateRespEntity })
  create(@Body() createReceipt4Dto: CreateReceipt4Dto): Promise<any> {
    return this.receipt4Service.create(createReceipt4Dto);
  }

  // @Get()
  // findAll() {
  //   return this.receipt4Service.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.receipt2Service.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReceipt2Dto: UpdateReceipt4Dto,
  ) {
    return this.receipt4Service.update(id, updateReceipt2Dto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.receipt2Service.remove(+id);
  // }
}
