import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Group, GroupSchema } from "src/model";
import { GroupController } from "./group.controller";
import { GroupService } from "./group.service";

@Module({
    imports:[
        MongooseModule.forFeature([{
            name: Group.name, schema: GroupSchema
        }])
    ],
    controllers: [GroupController],
    providers: [GroupService]
})
export class GroupModule {}