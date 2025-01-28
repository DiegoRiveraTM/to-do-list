import React from 'react';
import { TodoI } from './TodoApp';

interface TodoItemProps {
    todo: TodoI;
    deleteTodo: (id: number) => void;
    isDarkMode: boolean;
}

export default function TodoItem({ todo, deleteTodo, isDarkMode }: TodoItemProps) {
    return (
        <div className={`card my-2 p-2 d-flex flex-row ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
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