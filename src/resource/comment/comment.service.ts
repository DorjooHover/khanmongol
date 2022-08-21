import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment, CommentDocument } from "src/model";
import { CommentCreateDto, CommentUpdateDto } from "./dto/comment.dto";

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private model: Model<CommentDocument>) {}

    async create(dto: CommentCreateDto) {
        let comment
        try {
            comment = await this.model.create({
                comment: dto.comment,
                email: dto.email,
                parentId: dto.parentId,
                lesson: dto.lesson,
            })
        } catch (error) {
            throw new ForbiddenException(error.message)
        }

        return comment
    }
    async shows() {
        const comments = await this.model.find()
        if(!comments) {
            throw new ForbiddenException('empty')
        }
        return comments
    }

    async show(lesson: string) {
        const comments = await this.model.find({lesson})
        if(!comments) {
            throw new ForbiddenException('empty')
        }
        return comments
    }

    async showByEmail(email: string) {
        const comments = await this.model.find({email})
        if(!comments) {
            throw new ForbiddenException('empty')
        }
        return comments
    }

    async edit(id: string, dto: CommentUpdateDto) {
        let comment = await this.model.findById(id)
        if(!comment) {
            throw new ForbiddenException('empty')
        }
        try {
            comment = await this.model.findByIdAndUpdate({id}, {
                comment: dto.comment,
                email: dto.email,
                parentId: dto.parentId,
                lesson: dto.lesson,
            })
            await comment.save()
        } catch (error) {
            throw new ForbiddenException(error.message)
        }

        return comment
    }

    async delete(id: string) {
        let comment = await this.model.findById(id)
        if(!comment) {
            throw new ForbiddenException('empty')
        }

        await this.model.findByIdAndDelete(id)

        return comment
    }
}