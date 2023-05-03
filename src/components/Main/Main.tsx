import { useContext } from "react";

import { EmptyList } from "../EmptyList/EmptyList";
import { HeaderInsideMain } from "../HeaderInsideMain/HeaderInsideMain";
import { ListWithContent } from "../ListWithContent/ListWithContent";
import { TodoListContext } from "../../contexts/TodoListContext";

import styles from "./Main.module.css";

export function Main() {
	const { todoList } = useContext(TodoListContext);

	const todoListLength = todoList.length;

	return (
		<main className={styles.main}>
			<HeaderInsideMain />
			{
				todoListLength > 0 ?
					(<ListWithContent />)
					:
					(<EmptyList />)
			}
		</main>
	);
}
