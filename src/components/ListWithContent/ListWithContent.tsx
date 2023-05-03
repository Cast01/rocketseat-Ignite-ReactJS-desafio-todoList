import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TodoListType } from "../../App";

import styles from "./ListWithContent.module.css";

type ListWithContentPropsType = {
    todoList: TodoListType[];
    toggleTodoListCompleted: (id: number) => void;
    deleteTaskFromTodoList: (id: number) => void;
}

export function ListWithContent({
	todoList,
	toggleTodoListCompleted,
	deleteTaskFromTodoList
}: ListWithContentPropsType) {
	return (
		<ul className={styles.content}>
			{
				todoList.map(task => {
					return (
						<li
							key={task.id}
							className={task.completed ? styles.liCompleted : styles.li}
						>
							<div>
								{
									task.completed ?
										(
											<div className={styles.checkBoxCompleted} onClick={() => toggleTodoListCompleted(task.id)}>
												<CheckCircle size={"1.8rem"} weight="bold" />
											</div>
										)
										:
										(
											<div className={styles.checkBox} onClick={() => toggleTodoListCompleted(task.id)}>
												<Circle size={"1.8rem"} color="var(--blue-light)" weight="bold" />
											</div>
										)
								}
							</div>
							<p className={task.completed ? styles.taskContentCompleted : styles.taskContent}>{task.content}</p>
							<div>
								<Trash 
									size={"1.8rem"}
									weight="bold"
									onClick={() => deleteTaskFromTodoList(task.id)}
								/>
							</div>
						</li>
					);
				})
			}
		</ul>
	);
}