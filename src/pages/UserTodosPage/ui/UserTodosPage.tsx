import { Error } from "@/shared/ui/Error/Error";
import { Link, useParams } from "react-router-dom";
import { TodoCard } from "@/entities/todo/ui/TodoCard";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";
import styles from "@/pages/UserPostsPage/ui/UserPostsPage.module.css";
import { useGetTodosByUserIdQuery } from "@/entities/todo/api/todosApi";
import { LoadingSpinner } from "@/shared/ui/LoadingSpinner/LoadingSpinner";

export const UserTodosPage = () => {
    const {id} = useParams();
    const userId = Number(id);

    if (isNaN(userId) || userId <= 0) {
        return <Error errorMessage="Некорректный ID пользователя" />;
    }

    const {data: todos, isLoading, isError, refetch} = useGetTodosByUserIdQuery(userId);

    return (
        <div>
            <div className={styles.backButtonContainer}>
              <Link to="/posts" className={styles.backButton}>НАЗАД</Link>
            </div>

            <UserTabs userId={userId} />
            <h2>Задачи пользователя {userId}</h2>

            {isLoading && <LoadingSpinner />}
            {isError && <Error errorMessage="Ошибка загрузки задач" onRetry={refetch} />}
            
            {todos && todos.length === 0 && (
                <p>У пользователя нет задач</p>
            )}
            
            <ItemList
              items={todos}
              renderItem={(todo) => (
                <TodoCard key={todo.id} todo={todo} />
              )}
            />   
        </div>
    );
}
