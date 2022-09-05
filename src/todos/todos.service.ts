import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todos } from './todos.entity';
import { Repository } from 'typeorm';
import { RegisterTodoDto } from './dto/new-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todos)
    private readonly todosRepository: Repository<Todos>,
  ) {}

  findAll(): Promise<Todos[]> {
    return this.todosRepository.find({
      order: {
        created_at: 'DESC',
      },
    });
  }

  findOne(id: string): Promise<Todos> {
    return this.todosRepository.findOne({ id });
  }

  async createOne(todo: RegisterTodoDto): Promise<Todos> {
    const todoEntity = this.todosRepository.create(todo);
    const createdTodo = await this.todosRepository.save(todoEntity);
    return createdTodo;
  }

  async completeTask(id: string): Promise<Todos> {
    await this.todosRepository.update({ id }, { done: true });
    return this.findOne(id);
  }
}
