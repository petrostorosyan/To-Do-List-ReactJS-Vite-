import { useEffect, useState } from "react";
import styles from "./to-do.module.css";

const ToDo = ({ value, id, callback, changedValue }) => {
  const [isReadOnly, setIsReadOnly] = useState(false);  
  const [inputValue, setInputValue] = useState(value); 

  const changeReadOnly = (e) => {
    console.log(e.target.value, "value");
    setIsReadOnly(true);
  };

  const removeToDo = (id) => {
    callback(id)
  };

  useEffect(() => {
    console.log(inputValue, "inputValue");
  }, [inputValue])

 

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
    console.log(e.target.value);
  };

  const saveToDoChanges = (inputValue) => {
    changedValue(inputValue);
  }

  return (
    <div className={styles.toDoContainer}>
      <input
        type="text"
        value={inputValue}
        readOnly={!isReadOnly}
        className={styles.input}
        onChange={handleInputChange}
      />
      <div className={styles.iconsBox}>
        <button
          className={styles.btn}
          onClick={changeReadOnly}
        //   onChange={changeInputValue}
        >
          Change
        </button>
        <button
          className={styles.btn}
          onClick={saveToDoChanges}
        >
          Save
        </button>
        <button
          className={styles.btn}
          onClick={()=> removeToDo(id)}
        >
          Delete
        </button>
        
      </div>
    </div>
  );
};

export default ToDo;
