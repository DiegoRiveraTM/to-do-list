import { TodoI } from './TodoApp';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: TodoI[];
    deleteTodo: (id: number) => void;
    startEditing: (todo: TodoI) => void;
    saveTodo: (updatedTodo: TodoI) => void;
    editingTodo: TodoI | null;
    isDarkMode: boolean;
}

export default function TodoList({ todos, deleteTodo, startEditing, saveTodo, editingTodo, isDarkMode }: TodoListProps) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    startEditing={startEditing} 
                    saveTodo={saveTodo} 
                    isEditing={editingTodo?.id === todo.id} 
                    isDarkMode={isDarkMode} 
                />
            ))}
        </div>
    );
}
