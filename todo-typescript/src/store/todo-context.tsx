import React, { useState } from "react";
import Task from "../models/task";

type TodosContextObj = {
  tasks: Task[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
  tasks: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
const TodoContextProvider: React.FC = (props) => {
  useState();
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Task(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };
  const removeTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const contextValue: TodosContextObj = {
    tasks: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
