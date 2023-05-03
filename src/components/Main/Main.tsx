import { TodoListType } from "../../App";
import { EmptyList } from "../EmptyList/EmptyList";
import { HeaderInsideMain } from "../HeaderInsideMain/HeaderInsideMain";
import { ListWithContent } from "../ListWithContent/ListWithContent";
import styles from "./Main.module.css";

export type MainPropsType = {
    todoList: TodoListType[];
    toggleTodoListCompleted: (id: number) => void;
    deleteTaskFromTodoList: (id: number) => void;
}

export function Main({
	todoList,
	toggleTodoListCompleted,
	deleteTaskFromTodoList
}: MainPropsType) {
	const todoListLength = todoList.length;
	return (
		<main className={styles.main}>
			<HeaderInsideMain todoList={todoList} />
			{
				todoListLength > 0 ?
					(<ListWithContent 
						todoList={todoList}
						toggleTodoListCompleted={toggleTodoListCompleted}
						deleteTaskFromTodoList={deleteTaskFromTodoList}
					/>)
					:
					(<EmptyList />)
			}
		</main>
	);
}
