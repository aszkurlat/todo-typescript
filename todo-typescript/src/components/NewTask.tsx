import classes from "./NewTask.module.css";
import { TodoContext } from "../store/todo-context";
import { useRef, useContext } from "react";

const NewTask: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
    inputRef.current!.value = "";
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.formLabel}>Task:</label>
      <input className={classes.formInput} ref={inputRef} type="text" />
      <button>Add Task</button>
    </form>
  );
};
export default NewTask;
