import { FormAddTask } from "../FormAddTask/FormAddTask";

import logo from "../../assets/Logo.svg";

import styles from "./Header.module.css";

export function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} alt="A rocket and the word 'todo' next to it" />
			<FormAddTask />
		</header>
	);
}