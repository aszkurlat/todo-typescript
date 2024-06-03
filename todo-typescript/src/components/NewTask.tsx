import classes from "./NewTask.module.css";
import { useRef } from "react";

const NewTask: React.FC<{ onAddTask: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current?.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    props.onAddTask(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>ToDo List:</label>
      <input type="text" ref={inputRef} />
      <button>Add Task</button>
    </form>
  );
};
export default NewTask;
