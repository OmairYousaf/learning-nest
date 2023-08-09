import { ExecutionContext, createParamDecorator } from "@nestjs/common"



export const IsStringHavingValue=createParamDecorator(
    (data:unknown,ctx:ExecutionContext)=>{
        const request=ctx.switchToHttp().getRequest();
        const value=request.body;
        if(value.username!= '' && value.username !=null){
            return value.username
        }
        throw new Error('Value is not a string')
    }
)