import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

export const Todo = () => {
  return (
    <TodoProvider>
      <Title />
      <TodoList />
    </TodoProvider>
  );
};
