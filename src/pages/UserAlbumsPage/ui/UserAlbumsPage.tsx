import { FC } from "react";
import { useParams } from "react-router-dom";

export const UserAlbumsPage: FC = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Альбомы пользователя {id}</h1>
        </div>
    );
}
