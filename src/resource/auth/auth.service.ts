import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Model } from "mongoose";
import {Strategy} from 'passport-local'
import { app } from "src/config/firebase";
import { User, UserDocument } from "src/model";
import { AuthCreateUserDto, AuthLoginUserDto } from "./dto/auth.dto";

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
        super()
    }

    async createUser (dto: AuthCreateUserDto) {
        const auth = getAuth(app)
        let userData = null
        if(!dto.isGoogle) {
            await createUserWithEmailAndPassword(auth, dto.email, dto.password).then(async (data) => {
                try {
                    const user = await this.userModel.create({
                        email:data.user.email,
                        // phone: dto.phone,
                        firstname: dto.firstname,
                        lastname: dto.lastname,
                    })
                    userData = user
                } catch(err) {
                    throw err
                }
    
            })
        } else {
            try {
                const user = await this.userModel.create({
                    email:dto.email,
                    firstname: dto.firstname,
                    lastname: dto.lastname,
                })
                userData = user
            } catch(err) {
                throw err
            }
        }
        return userData
    }

    async login(dto:AuthLoginUserDto) {
        const auth = getAuth(app)
        let userData = null
        if(!dto.isGoogle) {
            try {
                await signInWithEmailAndPassword(auth, dto.email,  dto.password).then((data) => {
                    userData = data.user
                })
            }catch(err) {
                throw err
            }
        }
        return userData
    }

    async logout() {
        const auth = getAuth(app)
        let message = ''
        await signOut(auth).then(() => {
            message = 'success'
        }).catch((err) => {
            message = err.message
        })

        return message
    }
}