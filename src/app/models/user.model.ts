import { ITodo } from "./todo.model";

export interface IUser {
    id: number,
    name: string,
    todos: ITodo[]
}