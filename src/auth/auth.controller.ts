import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { SignInDto} from "./dto/user.dto";

@ApiTags('User Api')
@Controller('user')
export class AuthController{
    constructor(private userService : AuthService){}

//-----------------------------Sign In ---------------------------------------------------

    @Post('/signIn')
    @ApiOperation({summary : "User can sign up yourself here"})
    async signIn(@Body() body : SignInDto){
        return this.userService.signInS(body)
    }

    @Post('/login')
    @ApiOperation({summary : "User can login"})
    async logIn(@Body() body){

    }

    @Post('/verify-otp')
    @ApiOperation({summary : "User should verify the account via OTP"})
    async verifyOtp(){

    }

    @Post('/resend-otp')
    @ApiOperation({summary : "If Otp expired can use resend Otp"})
    async resendOtp(){

    }

    @Post('/forgot-password')
    @ApiOperation({summary : "If User forgot password, you can use this option"})
    async forgotPassword(){

    }

    @Post('/change-password')
    @ApiOperation({summary : "User Can change the password using this option"})
    async changePassword(){

    }
}