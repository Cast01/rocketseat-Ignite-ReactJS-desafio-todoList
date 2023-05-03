import { useState } from "react";
import { EmptyList } from "../EmptyList/EmptyList";
import { HeaderInsideMain } from "../HeaderInsideMain/HeaderInsideMain";
import { ListWithContent } from "../ListWithContent/ListWithContent";
import styles from "./Main.module.css";

export type TodoListType = {
    completed: boolean;
    content: string;
}

export function Main() {
	const [todoList, setTodoList] = useState<TodoListType[]>([
		// {
		// 	completed: true,
		// 	content: "asd",
		// },
		// {
		// 	completed: false,
		// 	content: "asd",
		// }
	]);

	const todoListLength = todoList.length;
	return (
		<main className={styles.main}>
			<HeaderInsideMain todoList={todoList} />
			{
				todoListLength > 0 ?
					(<ListWithContent />)
					:
					(<EmptyList />)
			}
		</main>
	);
}