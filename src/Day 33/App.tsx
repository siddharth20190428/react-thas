import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import TodosContext, { TodoType } from "./TodosContext";
import Todos from "./Todos";
import "./Day 33.css";

// interface AppProps {
//   title: string;
//   description: string;
// }

// const App: FC<AppProps> = ({ title }) => {
// const App = ({ title, description }: AppProps) => {
const App = () => {
  // const [counter, setCounter] = useState<number>(0);
  const [theme, setTheme] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="center-page day-33">
        <ThemeToggle />
        <TodosContext.Provider value={{ todos, setTodos }}>
          <Todos />
        </TodosContext.Provider>

        {/* counter */}
        {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
        {/* counter */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
