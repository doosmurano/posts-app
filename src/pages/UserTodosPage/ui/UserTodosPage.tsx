import { useParams } from "react-router-dom";
import { Error } from "@/shared/ui/Error/Error";
import { TodoCard } from "@/entities/todo/ui/TodoCard";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";
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
            <UserTabs userId={userId} />
            <h2>Задачи пользователя {userId}</h2>

            {isLoading && <LoadingSpinner />}
            {isError && <Error errorMessage="Ошибка загрузки задач" onRetry={refetch} />}
            
            {todos && todos.length === 0 && (
                <p>У пользователя нет задач</p>
            )}
            
            {todos && (
                <div>
                    {todos.map((todo) => (
                        <TodoCard key={todo.id} todo={todo} />
                    ))}
                </div>
            )}    
        </div>
    );
}
