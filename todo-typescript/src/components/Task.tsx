import classes from "./Task.module.css";

const Task: React.FC<{
  text: string;
  onRemoveTask: (id: string) => void;
}> = (props) => {
  return (
    <li className={classes.task}>
      {props.text}
      <button
        className={classes.removeBtn}
        onClick={() => props.onRemoveTask(props.id)}
      >
        Remove
      </button>
    </li>
  );
};
export default Task;
