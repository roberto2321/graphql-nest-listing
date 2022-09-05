import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { inputTodo } from './inputs/todo.input';
import { Todos } from './todos.entity';

@Resolver('Todos')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [Todos])
  async allTodos(): Promise<Todos[]> {
    return this.todosService.findAll();
  }

  @Query(() => Todos)
  async todo(@Args('id') id: string): Promise<Todos> {
    return this.todosService.findOne(id);
  }

  @Mutation(() => Todos)
  async createTodo(@Args('data') data: inputTodo): Promise<Todos> {
    return this.todosService.createOne(data);
  }

  @Mutation(() => Todos)
  async completeTodo(@Args('id') id: string): Promise<Todos> {
    return this.todosService.completeTask(id);
  }
}
