import { ReactNode, createContext, useState } from "react";

type TodoListContextProviderPropsType = {
    children: ReactNode;
}

export type TodoListType = {
    id: number;
    completed: boolean;
    content: string;
}

type TodoListContextType = {
    todoList: TodoListType[],
    setTodoList: React.Dispatch<React.SetStateAction<TodoListType[]>>,
    toggleTodoListCompleted: (id: number) => void;
    addTaskInTodoList: (content: string) => void;
    deleteTaskFromTodoList: (id: number) => void;
}

export const TodoListContext = createContext({} as TodoListContextType);

export function TodoListContextProvider({
	children
}: TodoListContextProviderPropsType) {
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

	function deleteTaskFromTodoList(id: number) {
		const deleteTask = todoList.filter(task => task.id !== id);

		setTodoList(deleteTask);
	}

	const value = {
		todoList,
		setTodoList,
		addTaskInTodoList,
		deleteTaskFromTodoList,
		toggleTodoListCompleted,
	};

	return (
		<TodoListContext.Provider value={ value }>
			{children}
		</TodoListContext.Provider>
	);
}