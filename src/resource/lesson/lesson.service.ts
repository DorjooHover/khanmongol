import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Lesson, LessonDocument } from "src/model";
import { LessonCreateDto, LessonUpdateDto } from "./dto/lesson.dto";

@Injectable()
export class LessonService {
    constructor(@InjectModel(Lesson.name) private model: Model<LessonDocument>) {}

    async create(dto: LessonCreateDto) {
        let lesson = await this.model.findOne({name: dto.name})
        if(lesson) {
            throw new ForbiddenException('founded')
        }

        try {
            lesson = await this.model.create({
                name: dto.name,
                videoUrl: dto.videoUrl,
                description: dto.description,
                category: dto.category,
                level: dto.level,
                teacher: dto.teacher,
            })
        } catch(err) {
            throw new ForbiddenException(err.message)
        }

        return lesson
    }

    async shows() {
        const lessons = await this.model.find()
        if(!lessons) {
            throw new ForbiddenException('empty')
        }
        return lessons
    }

    async show(name:string) {
        const lesson = await this.model.findOne({name})
        if(!lesson) {
            throw new ForbiddenException('empty')
        }
        return lesson
    }

    async showByTeacher(email:string) {
        const lessons = await this.model.find({teacher: email})
        if(!lessons) {
            throw new ForbiddenException('empty')
        }
        return lessons
    }

    async showByLevel(id:string) {
        const lessons = await this.model.find({level: id})
        if(!lessons) {
            throw new ForbiddenException('empty')
        }
        return lessons
    }

    async edit(name: string, dto: LessonUpdateDto) {
        let lesson = await this.model.findOne({name})
        if(!lesson) {
            throw new ForbiddenException('empty')
        }
        try {
            lesson = await this.model.findOneAndUpdate({name},{
                name: dto.name,
                category: dto.category,
                videoUrl: dto.videoUrl,
                descriptio: dto.description,
                level: dto.level,
                teacher: dto.teacher
            })
        } catch(err) {
            throw new ForbiddenException(err.message)
        }

        return lesson
    }

    async delete(name: string) {
        let lesson = await this.model.findOne({name})
        if(!lesson) {
            throw new ForbiddenException('empty')
        }
        
        await this.model.findOneAndDelete({name})
        await lesson.save()
        return lesson
    }
}