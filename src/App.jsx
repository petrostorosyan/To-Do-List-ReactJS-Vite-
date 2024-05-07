import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./to-do/to-do";
import "@fontsource/montserrat/400.css";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoId, setToDoId] = useState(1);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const change = (e) => {
    setValue(e.target.value);
  };

  const addToDo = () => {
    setToDoId((prev) => prev + 1);

    let data = {
      id: todoId,
      value: value,
    };

    setTodos([...todos, data]);
  };

  useEffect(() => {
    console.log(todos, "todos");
  }, [todos]);

  const deleteToDo = (id) => {
    const newArr = todos.filter((x) => x.id != id);
    setTodos(newArr);
  };

  const ChangedToDo = (val) => {
    console.log(val, 'newVal');
    let data = {
      id: todoId,
      value: val,
    };

    setTodos((prev)=> [...prev, data]);
  }

  return (
    // <div className={`app-container ${isHovered ? "parent-hovered": ""}`}>
    <div className="app-container"> 
      <div
        // className={`to-do-container ${isHovered ? "child-hovered": ""}`}
        className="to-do-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="to-do-title">TO-DO List</h2>
        <div className="add-input-box">
          <input
            onChange={change}
            type="text"
            id="input"
            name="name"
            className="add-input"
            value={value}
          />
          <input
            onClick={addToDo}
            type="submit"
            value="Add"
            className="add-button"
          />
        </div>
        <div className="to-do-list">
          {todos.map((item) => {
            return (
              <ToDo
                key={item.id}
                callback={deleteToDo}
                changedValue={ChangedToDo}
                value={item.value}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
