import { useEffect, useRef, useState } from "react";
import styles from "./to-do.module.css";

const ToDo = ({ value, id, callback, changedValue, status }) => {
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [checked, setChecked] = useState(false);
  const inputRef = useRef();

  const changeReadOnly = (e) => {
    setIsReadOnly(true);
    inputRef.current.focus();
  };

  const removeToDo = (id) => {
    callback(id)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const saveToDoChanges = (val, id) => {
    changedValue(val, id);
    setIsReadOnly(false)
  }

  const handleSelet = (e) => {
    setChecked(e.target.checked);
    status(id, e.target.checked)
  }

  return (
    <div className={styles.toDoContainer}>
      <input type="checkbox" id={id} value={inputValue} className={styles.checkBox} onChange={handleSelet} />
      <input
        type="text"
        value={inputValue}
        readOnly={!isReadOnly}
        className={styles.input}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <div className={styles.iconsBox}>
        <button className={styles.btn} onClick={changeReadOnly}
        //   onChange={changeInputValue}
        >
          Change
        </button>
        <button className={styles.btn} onClick={() => saveToDoChanges(inputValue, id)}>Save</button>
        <button className={styles.btn} onClick={() => removeToDo(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDo;
