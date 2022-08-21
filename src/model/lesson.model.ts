import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type LessonDocument = Lesson & Document

@Schema({timestamps: true})
export class Lesson {
    @Prop({required: true, unique: true})
    name: string

    @Prop({required: true})
    videoUrl: string

    @Prop()
    description?: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'levels'})
    level: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'categories'})
    category: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'users'})
    teacher: string
}

export const LessonSchema = SchemaFactory.createForClass(Lesson)