import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import { collection, doc, query, onSnapshot } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // useEffect(() => {
  //   // this code here... fires when the app.js loads
  //   db.collection("todos").onSnapshot((snapshot) => {
  //     setTodos(snapshot.docs.map((doc) => doc.data().todo));
  //   });
  // }, []);

  useEffect(() => {
    const q = query(collection(db, "buddies"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log(
        "Data",
        querySnapshot.docs.map((d) => doc.data().todo)
      );
    });
    console.log(unsub);
  }, []);

  const addTodo = (e) => {
    // this will fire off when we click the button!
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
    });

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
