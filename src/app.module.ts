import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
// import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ItemsModule, 
    TypeOrmModule.forRoot(),
    // AuthModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
