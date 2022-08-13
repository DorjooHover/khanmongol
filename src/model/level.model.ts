import {  Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type LevelDocument = Level & Document

@Schema({timestamps: true})
export class Level {
    @Prop({required: true, unique: true})
    name: string

    @Prop({id:{type: mongoose.Schema.Types.ObjectId, ref: 'categories'}, required: true})
    categories: [{
        id: string
    }]
}

export const LevelSchema = SchemaFactory.createForClass(Level)