import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type UserDocument = User & Document

@Schema({timestamps:true})
export class User {
    @Prop({unique: true, required: true})
    email: string

    @Prop({required: true})
    firstname: string

    @Prop({required: true})
    lastname: string

    @Prop({type: String})
    nickname: string

    @Prop({type: Number, maxlength: 15, minlength: 5})
    phone: number

    @Prop({default: 'https://icon-library.com/images/default-profile-icon/default-profile-icon-6.jpg', required: true})
    profileImg: string

    @Prop({required: true, default: false, type: Boolean})
    isAdmin: boolean

    @Prop({required: true, default: false, type: Boolean})
    isTeacher: boolean

}


export const UserSchema = SchemaFactory.createForClass(User)