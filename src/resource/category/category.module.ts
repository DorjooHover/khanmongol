import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategoryScema } from "src/model";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

@Module({
    imports: [
        MongooseModule.forFeature([
        {name: Category.name, schema: CategoryScema}
    ])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule {}