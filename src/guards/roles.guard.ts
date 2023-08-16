import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector?:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean {
    // console.log('im here')
    
    const roles=this.reflector.get<string[]>('roles',context.getHandler());
    if(!!roles && roles.includes('admin')){

        console.log('proceeddd...')
        return true;
    }
    console.log(`Not  proceeddd...${roles}`)
    return false;
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
    // return matchRoles(roles, user.roles);
    // return false;
  }
}
