import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/auth.schema";
import { Model } from "mongoose";
import { SignInDto } from "./dto/user.dto";
import * as bcrypt from 'bcrypt'
import { hashpassword } from "src/utils/hash.password";

@Injectable()
export class AuthService{
    constructor(
        @InjectModel(User.name) private userModel : Model<User>
    ){}

    //-----------------------------Sign In ---------------------------------------------------
    async signInS(body : SignInDto){
       try {
        const hashpassworduser = await hashpassword(body.password);
        body.password = hashpassworduser;
        const user = await this.userModel.create(body)
        return {
            success : true,
            messgae : "User Created Successfully",
            data : user
        }
       } catch (error) {
            throw new BadRequestException(error.message)
       }
    }
}