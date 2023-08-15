import { ExecutionContext, createParamDecorator } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";



export const IsStringHavingValue=createParamDecorator(
    (data:unknown,ctx:ExecutionContext)=>{
        const request=ctx.switchToHttp().getRequest();
        const value=request.body;
        if( value.username !=null && value.username != ""){
            return value.username
        }
        throw new Error('Value is not a valid string')
    }
)