import React, { useState } from 'react';
import TodoList from './TodoList';

export interface TodoI {
    title: string;
    id: number;
}

export default function TodoApp() {
    const [todo, setTodo] = useState<TodoI>({ title: '', id: 0 });
    const [todos, setTodos] = useState<TodoI[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ title: e.target.value, id: todo.id });
    };

    const onEnter = () => {
        if (todo.title.trim() === '') return;
        const id = Math.floor(Math.random() * 100);
        setTodos([...todos, { title: todo.title, id }]);
        setTodo({ title: '', id: 0 });
    };

    const deleteTodo = (id: number) => {
        const nonDeletedTodos = todos.filter(todo => todo.id !== id);
        setTodos(nonDeletedTodos);
    };

    return (
        <div className="d-flex align-items-center mt-5 flex-column">
            <div className="flex-column shadow-sm d-flex justify-content-between" style={{ width: '500px' }}>
                <div className="d-flex justify-content-center mb-3">
                    <label className="text-muted me-2">Please Enter Your To-do</label>
                    <input 
                        value={todo.title} 
                        onChange={onChange} 
                        placeholder='To-do' 
                        className='rounded p-2 me-2 '
                    />
                    {todo.title && (
                        <button onClick={onEnter} className="btn btn-primary">Enter</button>
                    )}
                </div>
                <TodoList todos={todos} deleteTodo={deleteTodo} />
            </div>
        </div>
    );
}
