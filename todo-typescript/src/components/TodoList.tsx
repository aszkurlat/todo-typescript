import classes from "./TodoList.module.css";
import Task from "./Task";
import { TodoContext } from "../store/todo-context";
import { useContext } from "react";

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.todoList}>
      {todoCtx.tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          onRemoveTask={todoCtx.removeTodo.bind(null, task.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
