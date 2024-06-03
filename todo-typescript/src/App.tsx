import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import TaskItem from "./models/task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const addTaskHandler = (taskText: string) => {
    const myNewTask = new TaskItem(taskText);

    setTasks((prev) => {
      return prev.concat(myNewTask);
    });
  };

  return (
    <>
      <NewTask onAddTask={addTaskHandler} />
      <TodoList tasks={tasks} />
    </>
  );
}

export default App;
