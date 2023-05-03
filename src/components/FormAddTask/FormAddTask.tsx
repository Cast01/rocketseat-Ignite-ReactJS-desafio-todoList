import { PlusCircle } from "phosphor-react";
import styles from "./FormAddTask.module.css";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

type FormAddTaskPropsType = {
    addTaskInTodoList: (content: string) => void;
}

export function FormAddTask({
	addTaskInTodoList
}: FormAddTaskPropsType) {
	const [todoListContentInput, setTodoListContentInput] = useState("");

	function contentOnChange(e: ChangeEvent<HTMLInputElement>) {
		setTodoListContentInput(e.target.value);
	}

	const addTaskInTodoListCallback = useCallback((e: FormEvent) => {
		e.preventDefault();

		addTaskInTodoList(todoListContentInput);
	}, [todoListContentInput, addTaskInTodoList]);

	return (
		<form
			onSubmit={addTaskInTodoListCallback}
			className={styles.form}
		>
			<input
				type="text"
				placeholder="Adicionar uma nova tarefa"
				defaultValue={todoListContentInput}
				onChange={(e) => contentOnChange(e)}
			/>
			<button type="submit">
				<span>Criar</span>
				<PlusCircle size={"1.8rem"} weight="bold" />
			</button>
		</form>
	);
}