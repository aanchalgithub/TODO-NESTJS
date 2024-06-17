import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Todo } from "./schema/todo.schema";
import { Model } from "mongoose";

@Injectable()
export class TodoService{
 constructor (@InjectModel(Todo.name) private todoModel : Model<Todo> ){}
}