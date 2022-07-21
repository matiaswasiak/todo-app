import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
    "Qazi want to livestream today",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    // this will fire off when we click the button!
    e.preventDefault();
    setTodos([...todos, input]);
    setInput(""); // clear up the input after hitting submit
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos?.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
