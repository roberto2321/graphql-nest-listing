import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class inputTodo {
  @Field()
  title: string;
  @Field()
  done: boolean;
}
