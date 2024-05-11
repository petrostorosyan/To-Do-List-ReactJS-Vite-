import styles from "./info.module.css";

const ToDoInfo = ({totalTodos, allClear, completedTodosCount}) => {
    
    const clearAll = () => {
        allClear([]);
    }

    const clearCompleted = () => {
        let statusFiltered = totalTodos.filter((x) => x.status != true);
        allClear(statusFiltered);
    }
    
    return (
        <div className={styles.infoContainer}>
            <div className={styles.total}>
                <span>Completed - {completedTodosCount}</span>
                <span>/</span>
                <span>{totalTodos.length}</span>
            </div>

            <button className={styles.btn} onClick={clearCompleted}>Clear completed</button>
            <button className={styles.btn} onClick={clearAll}>Clear all</button>
            
        </div>
    )
}

export default ToDoInfo;