import classes from "./NewTask.module.css";

const NewTodo: React.FC = () => {
  return (
    <form className={classes.form}>
      <label>ToDo List:</label>
      <input type="text" />
      <button>Add Task</button>
    </form>
  );
};
export default NewTodo;
