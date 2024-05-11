import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./to-do/to-do";
import "@fontsource/montserrat/400.css";
import ToDoInfo from "./to-do-info/info";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoId, setToDoId] = useState(1);
  const [showRequired, setShowRequired] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const change = (e) => {
    if(e.target.value) {
      setShowRequired(false);
    } else {
      setShowRequired(true);
    }
    setValue(e.target.value);
  };

  const addToDo = () => {
    setToDoId((prev) => prev + 1);

    if (value) {
      let data = {
        id: todoId,
        value: value,
      };

      setTodos([...todos, data]);     
    } else {
      setShowRequired(true);
    }

  };

  useEffect(() => {
    console.log(todos, "todos");
  }, [todos]);

  const deleteToDo = (id) => {
    const newArr = todos.filter((x) => x.id != id);
    setTodos(newArr);
  };

  const ChangedToDo = (val, id) => {
    let changedVal = todos.filter((x) => x.id == id);
    changedVal = {
      id: id,
      value: val,
    };

    todos[id-1] = changedVal;
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
        <div className="title-and-input">
          <h2 className="to-do-title">TO-DO List</h2>
          <div className="add-input-box">
            <div className="input-box">
              <input
                onChange={change}
                type="text"
                id="input"
                name="name"
                className="add-input"
                value={value}
              />
              {showRequired && <p className="required-message"><span>*</span> Fill in the field</p>}              
            </div>
            <input
              onClick={addToDo}
              type="submit"
              value="Add"
              className="add-button"
            />
          </div>
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
        <ToDoInfo />
      </div>
    </div>
  );
}

export default App;
