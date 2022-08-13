import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Level, LevelDocument } from "src/model";
import { LevelCreateDto, LevelUpdateDto } from "./dto";

@Injectable()
export class LevelService {
    constructor(@InjectModel(Level.name) private model: Model<LevelDocument>) {}
    async create(dto: LevelCreateDto) {
        let level = await this.model.findOne({name: dto.name})
        if(level) {
            throw new ForbiddenException('founded')
        }

        level = await this.model.create({
            name: dto.name,
            categories: dto.categories
        })

        return level
    }

    async shows() {
        const levels = await this.model.find().select('-_id -__v')
        if(!levels) {
            throw new ForbiddenException('empty')
        }
        return levels
    }

    async show(name:string) {
        let level = await this.model.findOne({name}).select('-_id -__v')
        if(!level) {
            throw new ForbiddenException('empty')
        }
        return level
    }

    
    async edit(name:string, dto: LevelUpdateDto) {
        let level = await this.model.findOne({name})
        if(!level) {
            throw new ForbiddenException('empty')
        }

        await this.model.findOneAndUpdate({name}, {
            name: dto.name,
            categories: dto.categories
        })
        await level.save()
        return level
    }

    async delete(name:string) {
        let level = await this.model.findOne({name})
        if(!level){
            throw new ForbiddenException('empty')
        }

        await this.model.findOneAndDelete({name})
        return level
    }

    
}