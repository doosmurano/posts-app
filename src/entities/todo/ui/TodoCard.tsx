import { Todo } from "@/types/api";
import styles from "./TodoCard.module.css";

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
