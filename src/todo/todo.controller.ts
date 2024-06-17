import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { TodoDto } from "./dto/todo.dto";

@ApiTags('Todo Api')
@Controller('todo')
export class TodoController{
    constructor(private userService : TodoService){}

    @Post('/create')
    @ApiOperation({summary : "User can create the Task"})
    async createTodo(@Body() body : TodoDto){

    }

    @Get('/getAll')
    @ApiOperation({summary : "User can get all the Task mentioned"})
    async getALlTodos(){

    }

    @Get('/singleTodo/:id')
    @ApiOperation({summary : "User can view the single Task"})
    async getSingleTask(){

    }

    @Put('/update-single-task')
    @ApiOperation({summary : "User can update the single Task"})
    async updateSingleTask(){

    }

    @Delete('/delete')
    @ApiOperation({summary : "User can delete the single Task"})
    async delete(){
        
    }
}