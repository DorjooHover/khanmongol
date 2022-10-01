import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Group, GroupDocument } from "src/model";
import {  GroupCreateDto, GroupUpdateDto, LessonDto, StudentDto } from "./dto/group.dto";

@Injectable()
export class GroupService {
    constructor(@InjectModel(Group.name) private model: Model<GroupDocument>){}
    async create(dto: GroupCreateDto) {
        let group = await this.model.findOne({name: dto.name})
        if(group) {
            throw new ForbiddenException('founded')
        }

        try {
            group = await this.model.create({
                name: dto.name,
                categories: dto.categories,
                students: dto.students,
                lessons: dto.lessons,
                teacher: dto.teacher,
                level: dto.level
            })
        } catch(err) {
            throw new ForbiddenException(err.message)
        }
        return group
    }

    async shows() {
        let groups = await this.model.find()
        if(!groups) {
            throw new ForbiddenException('empty')
        }
        return groups
    }

    async show(name:string) {
        let group = await this.model.findOne({name})
        if(!group) {
            throw new ForbiddenException('empty')
        }
        return group
    }

    async edit(name:string, dto: GroupUpdateDto) {
        let group = await this.model.findOne({name})
        if(!group) {
            throw new ForbiddenException('empty')
        }
        try {
            await this.model.findOneAndUpdate({name}, {
                name: dto.name,
                categories: dto.categories,
                students: dto.students,
                lessons: dto.lessons,
                teacher: dto.teacher,
                level: dto.level
            })
            await group.save()
        } catch (err) {
            throw new ForbiddenException(err.message)
        }
        return group
    }

    async delete(name:string) {
        let group = await this.model.findOne({name})
        if(!group) {
            throw new ForbiddenException('empty')
        }

        await this.model.findOneAndDelete({name})
        return group
    }

    async addStudent(dto:StudentDto) {
        let group = await this.model.findOne({name:dto.name})

        if(!group) {
            throw new ForbiddenException('not found this group')
        }
        let students = group.students
        if(dto.students.length > 0) {
            dto.students.map((s) => {
                students.push(s)
            })
        }
        group = await this.model.findOneAndUpdate({name: dto.name}, {
            students: students
        })
        return group
    }
    async removeStudent (dto: StudentDto) {
        let group = await this.model.findOne({name:dto.name})

        if(!group) {
            throw new ForbiddenException('not found this group')
        }
        let students = group.students
        let newStudents
        if(dto.students.length > 0) {
    
            dto.students.map((s) => {
                newStudents = students.filter(function(e) {
                    return e != s
                })
            })
        }
        
        group = await this.model.findOneAndUpdate({name: dto.name}, {
            students: newStudents
        })
        return group
    }

    async addLesson(dto:LessonDto) {
        let group = await this.model.findOne({name:dto.name})

        if(!group) {
            throw new ForbiddenException('not found this group')
        }
        let lessons = group.lessons
        if(dto.lessons.length > 0) {
            dto.lessons.map((s) => {
                lessons.push(s)
            })
        }
        group = await this.model.findOneAndUpdate({name: dto.name}, {
            lessons: lessons
        })
        return group
    }

    async removeLesson (dto: LessonDto) {
        let group = await this.model.findOne({name:dto.name})

        if(!group) {
            throw new ForbiddenException('not found this group')
        }
        let lessons = group.lessons
        let newlessons
        if(dto.lessons.length > 0) {
    
            dto.lessons.map((s) => {
                newlessons = lessons.filter(function(e) {
                    return e != s
                })
            })
        }
        
        group = await this.model.findOneAndUpdate({name: dto.name}, {
            students: newlessons
        })
        return group
    }
}