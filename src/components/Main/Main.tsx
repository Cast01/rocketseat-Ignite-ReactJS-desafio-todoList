import { useState } from "react";
import { EmptyList } from "../EmptyList/EmptyList";
import { HeaderInsideMain } from "../HeaderInsideMain/HeaderInsideMain";
import { ListWithContent } from "../ListWithContent/ListWithContent";
import styles from "./Main.module.css";

export type TodoListType = {
    id: number;
    completed: boolean;
    content: string;
}

export function Main() {
	const [todoList, setTodoList] = useState<TodoListType[]>([
		{
			id: 1,
			completed: true,
			content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
		},
		{
			id: 2,
			completed: false,
			content: "asd",
		}
	]);

	function toggleTodoListCompleted(id: number) {
		const toggleCompleted = todoList.map(task => {
			if (task.id === id) {
				return {
					...task,
					completed: !task.completed
				};
			}

			return task;
		});

		setTodoList(toggleCompleted);
	}

	const todoListLength = todoList.length;
	return (
		<main className={styles.main}>
			<HeaderInsideMain todoList={todoList} />
			{
				todoListLength > 0 ?
					(<ListWithContent 
						todoList={todoList}
						toggleTodoListCompleted={toggleTodoListCompleted}
					/>)
					:
					(<EmptyList />)
			}
		</main>
	);
}