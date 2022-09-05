import { Module } from '@nestjs/common';
import { TodosResolver } from './todos.resolver';
import { TodosService } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from './todos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
  providers: [TodosResolver, TodosService],
})
export class TodosModule {}
