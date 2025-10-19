import styles from "./TodoCard.module.css";
import { Todo } from "@/entities/todo/model/types";

interface TodoCardProps {
    todo: Todo;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
    return (
        <article className={styles.todoCard}>
          <input 
            type="checkbox" 
            checked={todo.completed}
          />
          <span>{todo.title}</span>
        </article>
    );
}
