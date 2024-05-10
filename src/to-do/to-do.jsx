import { useEffect, useState } from "react";
import styles from "./to-do.module.css";

const ToDo = ({ value, id, callback, changedValue }) => {
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [checked, setChecked] = useState(false); 

  const changeReadOnly = (e) => {
    console.log(e.target.value, "value");
    setIsReadOnly(true);
  };

  const removeToDo = (id) => {
    callback(id)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
  };

  const saveToDoChanges = (inputValue) => {
    changedValue(inputValue);
  }

  const check = (id) => {
    setChecked(!checked); 
    console.log(id, 'id');
  }

  useEffect(() => {
    console.log(checked, 'checked');
  }, [checked])

  return (
    <div className={styles.toDoContainer}>
      <input type="checkbox" className={styles.checkBox} onChange={() => check(id)} />
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
          onClick={() => removeToDo(id)}
        >
          Delete
        </button>

      </div>
    </div>
  );
};

export default ToDo;
