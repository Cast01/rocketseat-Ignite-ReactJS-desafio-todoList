import { FormAddTask } from "../FormAddTask/FormAddTask";

import logo from "../../assets/Logo.svg";

import styles from "./Header.module.css";

type HeaderPropsType = {
    addTaskInTodoList: (content: string) => void;
}

export function Header({
	addTaskInTodoList
}: HeaderPropsType) {
	return (
		<header className={styles.header}>
			<img src={logo} alt="A rocket and the word 'todo' next to it" />
			<FormAddTask addTaskInTodoList={addTaskInTodoList} />
		</header>
	);
}