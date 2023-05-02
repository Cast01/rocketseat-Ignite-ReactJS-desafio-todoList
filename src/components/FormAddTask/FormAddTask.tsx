import { PlusCircle } from "phosphor-react";
import styles from "./FormAddTask.module.css";

export function FormAddTask() {
	return (
		<form className={styles.form}>
			<input
				type="text"
				placeholder="Adicionar uma nova tarefa"
			/>
			<button type="submit">
				<span>Criar</span>
				<PlusCircle size={"1.8rem"} weight="bold" />
			</button>
		</form>
	);
}