import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  imports: [DatabaseModule, ApiModule],
})
export class AppModule {}
