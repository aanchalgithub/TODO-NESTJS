import { Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

@Schema({timestamps : true})
export class TodoDto{
    @IsNotEmpty({message : "Title should not be empty"})
    @IsString({message : "Title should be in string format"})
    @MinLength(3,{
        message : "Minimum length not less than 3"
    })
    @ApiProperty({
        required : true,
        type : String,
        minLength : 3
    })
    title : string;

    @IsNotEmpty({message : "Title should not be empty"})
    @IsString({message : "Title should be in string format"})
    @MinLength(3,{
        message : "Minimum length not less than 3"
    })
    @ApiProperty({
        required : true,
        type : String,
        minLength : 3
    })
    description : string;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : Boolean
    })
    status : boolean;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : Date
    })
    comleted_at : Date;
}