import { FC } from "react";
import { useParams } from "react-router-dom";

export const UserPostsPage: FC = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Посты пользователя {id}</h1>
        </div>
    );
}
