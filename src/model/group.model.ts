import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type GroupDocument = Group & Document

@Schema({timestamps: true})
export class Group {
    @Prop({required: true, unique: true})
    name: string

    @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'users'})
    teacher: string

    @Prop({id: {type: mongoose.Schema.Types.ObjectId, ref: 'categories'}})
    categories: [{
        id: string
    }]

    @Prop({id: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}})
    students: [{
        id: string
    }]

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'levels'})
    level: string

    @Prop({id: {type: mongoose.Schema.Types.ObjectId, ref: 'lessons'}})
    lessons: [{
        id: string
    }]
}

export const GroupSchema = SchemaFactory.createForClass(Group)