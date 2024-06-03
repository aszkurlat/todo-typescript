import TodoItem from "./Task";
import classes from "./TodoList.module.css";

const Todos: React.FC = () => {
  return (
    <ul className={classes.todoList}>
      <TodoItem />
    </ul>
  );
};

export default Todos;
