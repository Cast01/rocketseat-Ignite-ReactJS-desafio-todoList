import { PlusCircle } from "phosphor-react";
import styles from "./FormAddTask.module.css";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TodoListContext } from "../../contexts/TodoListContext";

export function FormAddTask() {
	const [todoListContentInput, setTodoListContentInput] = useState("");

	const { addTaskInTodoList } = useContext(TodoListContext);

	function contentOnChange(e: ChangeEvent<HTMLInputElement>) {
		setTodoListContentInput(e.target.value);
	}

	function submitForm(e: FormEvent) {
		e.preventDefault();

		if (!todoListContentInput) {
			alert("Você não digitou nada.");

			return;
		}

		addTaskInTodoList(todoListContentInput);

		setTodoListContentInput("");
	}

	return (
		<form
			onSubmit={submitForm}
			className={styles.form}
		>
			<input
				type="text"
				placeholder="Adicionar uma nova tarefa"
				value={todoListContentInput}
				onChange={(e) => contentOnChange(e)}
			/>
			<button type="submit">
				<span>Criar</span>
				<PlusCircle size={"1.8rem"} weight="bold" />
			</button>
		</form>
	);
}