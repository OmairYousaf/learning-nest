import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {


 @ApiProperty({
        description:'name',
        example:'ali'
})
@IsString()
name: string;

@ApiProperty({
    description:'email',
    example:'ali@gmail.com'
})
@IsEmail()
email:string;

@ApiProperty({
    description:'password',
    example:'1234'
})
@IsNotEmpty()
password:string

}
