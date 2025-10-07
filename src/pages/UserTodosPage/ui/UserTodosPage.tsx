import { FC } from "react";
import { useParams } from "react-router-dom";

export const UserTodosPage: FC = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Задачи пользователя {id}</h1>
        </div>
    );
}
