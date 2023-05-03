import clipboardSVG from "../../assets/Clipboard.svg";

import styles from "./EmptyList.module.css";

export function EmptyList() {
	return (
		<div className={styles.content}>
			<img src={clipboardSVG} alt="Clipboard svg" />
			<div>
				<p>Você ainda não tem tarefas cadastradas</p>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</div>
	);
}