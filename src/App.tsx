import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export type TodoListType = {
    id: number;
    completed: boolean;
    content: string;
}

function App() {
	const [todoList, setTodoList] = useState<TodoListType[]>([
		{
			id: 0,
			completed: true,
			content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
		},
		{
			id: 1,
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

	function addTaskInTodoList(content: string) {
		const addTask = [
			...todoList,
			{
				id: todoList.length + 1,
				content,
				completed: false
			}
		];

		setTodoList(addTask);
	}

	return (
		<div>
			<Header
				addTaskInTodoList={addTaskInTodoList}
			/>
			<Main 
				todoList={todoList}
				toggleTodoListCompleted={toggleTodoListCompleted}
			/>
		</div>
	);
}

export default App;
