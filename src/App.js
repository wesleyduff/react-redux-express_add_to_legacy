import React from "react";
import AddTodo from "./_components/AddTodo";
import TodoList from "./_components/TodoList";
import VisibilityFilters from "./_components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}
