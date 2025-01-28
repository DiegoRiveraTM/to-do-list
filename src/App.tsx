import React from "react";
import TodoApp from "./components/TodoApp";
import { useState } from "react";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div className={`App min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            <header className="flex justify-between items-center text-lg p-4">
                <span>To-Do-List</span>
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </header>
            <TodoApp isDarkMode={isDarkMode} />
        </div>
    )
}
export default App;