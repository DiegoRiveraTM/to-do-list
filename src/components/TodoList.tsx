import React from 'react';
import { TodoI } from './TodoApp';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: TodoI[];
    deleteTodo: (id: number) => void;
}

export default function TodoList({ todos, deleteTodo }: TodoListProps) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}