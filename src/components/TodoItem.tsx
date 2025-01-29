import { useState } from 'react';
import { TodoI } from './TodoApp';

interface TodoItemProps {
    todo: TodoI;
    deleteTodo: (id: number) => void;
    startEditing: (todo: TodoI) => void;
    saveTodo: (updatedTodo: TodoI) => void;
    isDarkMode: boolean;
    isEditing: boolean;
}

export default function TodoItem({ todo, deleteTodo, startEditing, saveTodo, isDarkMode, isEditing }: TodoItemProps) {
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleSave = () => {
        saveTodo({ ...todo, title: editTitle });
    };

    return (
        <div className={`card my-2 p-2 d-flex flex-row ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
            {isEditing ? (
                <>
                    <input 
                        value={editTitle} 
                        onChange={(e) => setEditTitle(e.target.value)} 
                        className={`rounded p-2 me-2 ${isDarkMode ? 'text-black' : 'text-black'}`}
                    />
                    <button onClick={handleSave} className="btn btn-success ms-auto">Save</button>
                </>
            ) : (
                <>
                    {todo.title}
                    <button onClick={() => startEditing(todo)} className="btn btn-secondary ms-auto">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger ms-2">Delete</button>
                </>
            )}
        </div>
    );
}
