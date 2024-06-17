import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class SignInDto{
    @IsNotEmpty({message : "Full Name should not be empty"})
    @MinLength(3,{message : "Minimum length should be 3 "})
    @ApiProperty({
        required : true,
        type : String,
        minLength : 3,
        example : "Aanchal"
    })
    first_name : string;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : String,
    })
    middle_name :string;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : String,
    })
    last_name : string;

    @IsNotEmpty({message : "User Name should not be empty"})
    @MinLength(3,{message : "Minimum length should be 3 "})
    @MaxLength(20,{message : "Max Length should not more than 20"})
    @ApiProperty({
        required : true,
        type : String,
        minLength : 3,
        maxLength : 20,
    })
    user_name : string;

    @IsNotEmpty({message : "Email should not be empty"})
    @IsEmail({},{message : "Invlaid Email Address"})
    @MinLength(3,{message : "Minimum Length should be 3"})
    @ApiProperty({
        required : true,
        minLength : 3,
        type : String
    })
    email : string;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : Boolean
    })
    is_verify : boolean;

    @IsOptional()
    @ApiProperty({
        required : false,
        type : Date
    })
    verify_at : Date;

    
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/, {
        message: "Minimum eight and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    })
    @IsNotEmpty({ message: "Password Must Required" })
    @ApiProperty({
        required: true,
        type: String,
        minLength: 8,
        maxLength: 15,
        example: 'Password@1'
    })
    password : string;

}

export class LoginDto{

}