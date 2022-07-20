import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rubbish out",
    "Qazi want to livestream today",
  ]);
  const [input, setInput] = useState("");
  console.log(input);

  const addTodo = (e) => {
    // this will fire off when we click the button!
    e.preventDefault();
    console.log("I'm working");
    setTodos([...todos, input]);
    setInput(""); // clear up the input after hitting submit
  };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        <input
          type="text"
          name=""
          id=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
