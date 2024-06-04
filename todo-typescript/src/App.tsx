import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./store/todo-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTask />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
