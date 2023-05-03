import { TodoListType } from "../../App";
import { EmptyList } from "../EmptyList/EmptyList";
import { HeaderInsideMain } from "../HeaderInsideMain/HeaderInsideMain";
import { ListWithContent } from "../ListWithContent/ListWithContent";
import styles from "./Main.module.css";

type MainPropsType = {
    todoList: TodoListType[];
    toggleTodoListCompleted: (id: number) => void;
}

export function Main({
	todoList,
	toggleTodoListCompleted
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
					/>)
					:
					(<EmptyList />)
			}
		</main>
	);
}