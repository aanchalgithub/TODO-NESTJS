import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps : true})
export class Todo{
    @Prop({required :true})
    title : string;

    @Prop({required :true})
    description : string;

    @Prop({required :false})
    status : boolean;

    @Prop({required :false})
    completed_at : Date;

}

export const todoSchema = SchemaFactory.createForClass(Todo)