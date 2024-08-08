import { Module } from "@nestjs/common";
import { ArtPieceModule } from "./art-piece/art-piece.module";
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from "@nestjs/config";
import { UserModule } from './user/user.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),ArtPieceModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
