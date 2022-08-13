import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type CategoryDocument = Category & Document

@Schema({timestamps: true})
export class Category {
    @Prop({required: true, unique: true})
    name:string

    @Prop({id: {type: mongoose.Schema.Types.ObjectId, ref: 'users'}, required: true})
    teachers: [{
        id: string
    }]

    @Prop({id: {type: mongoose.Schema.Types.ObjectId, ref: 'levels'}, required: true})
    levels: [{
        id: string
    }]

    @Prop({type: Boolean, required: true, default: true})
    isActive: boolean
}

export const CategoryScema = SchemaFactory.createForClass(Category)