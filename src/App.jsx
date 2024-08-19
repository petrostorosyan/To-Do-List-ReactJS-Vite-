import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./to-do/to-do";
import "@fontsource/montserrat/400.css";
import ToDoInfo from "./to-do-info/info";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoId, setToDoId] = useState(1);
  const [showRequired, setShowRequired] = useState(false);
  const [completedStatus, setCompletedStatus] = useState(0);
  let checkedToDoStatus = undefined;
 

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
        status: false,
      };

      setTodos([...todos, data]);     
    } else {
      setShowRequired(true)
    }

  };;

  const deleteToDo = (id) => {
    const afterDeletedTodos = todos.filter((x) => x.id != id);
    setTodos(afterDeletedTodos);
  };


  const ChangedToDo = (val, id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, value: val };
      }
      return todo;
    }));
  };
  
  const toDostatus = (id, checked) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: checked };
      }
      return todo;
    }));
  };

  const clearAll = (obj) => {
    setTodos(obj);
  }

  useEffect(() => {
    checkedToDoStatus = todos.filter((x) => x.status == true);
    setCompletedStatus(checkedToDoStatus.length)
  }, [todos])

  return (   
    <div className="app-container">
      <div
        className="to-do-container"
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
                status={toDostatus}
              />
            );
          })}
        </div>
        <ToDoInfo totalTodos={todos} allClear={clearAll} completedTodosCount={completedStatus} />
      </div>
    </div>
  );
}

export default App;
