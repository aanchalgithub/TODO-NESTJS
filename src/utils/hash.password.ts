import * as bcrypt from 'bcrypt'

export async function hashpassword(password : string){
    const salt = await bcrypt.genSalt(10)
    const isMatch = await bcrypt.hashSync(password,salt)
    return isMatch;
}

export async function isVerify(userPass : string, dbPass : string){
    const comparePass = await bcrypt.compare(userPass,dbPass)
    return comparePass;
}