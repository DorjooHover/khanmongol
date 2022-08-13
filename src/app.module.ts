import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import configration from './config/configration';
import { AuthModule, UserModule } from './resource/';
import { CategoryModule } from './resource/category/category.module';
import { GroupModule } from './resource/group/group.module';
import { LevelModule } from './resource/levels/level.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configration],
      isGlobal: true
    }),
    // MongooseModule.forRootAsync({
    //   useFactory: (config: ConfigService) => ({
    //     uri: config.get('database.mongoUrl'),
    //     dbName: config.get('database.mongoDbName')
    //   }),
    //   inject: [ConfigService]
    // }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      dbName: process.env.MONGO_DB_NAME
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    LevelModule,
    GroupModule,
  ],

})
export class AppModule {}
