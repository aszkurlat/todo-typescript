import TaskItem from "../models/task";
import classes from "./TodoList.module.css";
import Task from "./Task";

const Todos: React.FC<{ tasks: TaskItem[] }> = (props) => {
  return (
    <ul className={classes.todoList}>
      {props.tasks.map((task) => (
        <Task key={task.id} text={task.text} />
      ))}
    </ul>
  );
};

export default Todos;
