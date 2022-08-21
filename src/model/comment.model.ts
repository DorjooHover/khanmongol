import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, mongo } from "mongoose";

export type CommentDocument = Comment & Document

@Schema({timestamps: true})
export class Comment {
    @Prop({required: true})
    comment: string

    @Prop({required: true})
    email: string

    @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'lessons'})
    lesson: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'comments'})
    parentId?: string
}

export const CommentSchema = SchemaFactory.createForClass(Comment)