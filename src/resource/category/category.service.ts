import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "src/model";
import { CategoryCreateDto } from "./dto";

@Injectable()
export class CategoryService{
    constructor(@InjectModel(Category.name) private model: Model<CategoryDocument>) {}

    async create(dto: CategoryCreateDto) {
        let category = await this.model.findOne({name: dto.name})
        if(category ) {
            throw new ForbiddenException (
                'Бүртгэгдсэн төрөл байна.'
           )
        }
        try {
            category = await this.model.create({
                name: dto.name,
                teachers: dto.teachers,
                levels: dto.levels,
                isActive: dto.isActive
            })
        } catch(err) {
            throw new ForbiddenException(err.message)
        }
        return category 
    }

    async shows() {
        let categories = await this.model.find().select('-__v -_id')
        if(!categories) {
            throw new ForbiddenException('empty')
        }

        return categories
    }

    async show(name:string) {
        let category = await this.model.findOne({name})
        if(!category) {
            throw new ForbiddenException('empty')
        }

        return category
    }

    async edit(name:string, dto: CategoryCreateDto) {
        let category = await this.model.findOne({name})
        if(!category) {
            throw new ForbiddenException('empty')
        }
         await this.model.findOneAndUpdate({name},{
            name: dto.name,
            teachers: dto.teachers,
            levels: dto.levels,
            isActive: dto.isActive
        })
        await category.save()
        return category

    }   

    async delete(name:string) {
        let category = await this.model.findOne({name})
        if(!category) {
            throw new ForbiddenException('empty')
        }
        await this.model.findOneAndDelete({name})
        return category
    }

    
}