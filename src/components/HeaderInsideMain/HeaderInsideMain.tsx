import { TodoListType } from "../Main/Main";
import styles from "./HeaderInsideMain.module.css";

type HeaderInsideMainPropsType = {
    todoList: TodoListType[]
}

export function HeaderInsideMain({
	todoList
}: HeaderInsideMainPropsType) {
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
				<span>{taskCompletedLength}</span>
			</div>
		</header>
	);
}