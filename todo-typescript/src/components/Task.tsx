import classes from "./Task.module.css";

const TodoItem: React.FC<{ text: string; onRemove: () => void }> = (props) => {
  const removeTaskHandler = (e: React.MouseEvent) => {
    const listItem = e.currentTarget.parentElement;
    if (listItem) {
      listItem.remove();
    }
  };

  return (
    <li className={classes.task}>
      {props.text}
      <button className={classes.removeBtn} onClick={removeTaskHandler}>
        Remove
      </button>
    </li>
  );
};
export default TodoItem;
