import React from 'react';
import { TodoI } from './TodoApp';

interface TodoItemProps {
    todo: TodoI;
    deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, deleteTodo }: TodoItemProps) {
    return (
        <div className="card my-2 p-2 d-flex flex-row">
            {todo.title}
            <button 
                onClick={() => deleteTodo(todo.id)} 
                className="btn btn-danger ms-auto"
            >
                Delete
            </button>
        </div>
    );
}