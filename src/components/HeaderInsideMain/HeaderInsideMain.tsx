import { useContext } from "react";

import { TodoListContext } from "../../contexts/TodoListContext";

import styles from "./HeaderInsideMain.module.css";

export function HeaderInsideMain() {
	const { todoList } = useContext(TodoListContext);

	const todoListLength = todoList.length;
	const taskCompletedLength = todoList.filter(task => task.completed === true).length;
    
	return (
		<header className={styles.header}>
			<div>
				<span>Tarefas criadas</span>
				<span>{todoListLength}</span>
			</div>
			<div>
				<span>Concluídas</span>
				<span>{taskCompletedLength} de {todoListLength}</span>
			</div>
		</header>
	);
}