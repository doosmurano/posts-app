import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "../../../widgets/UserTabs/ui/UserTabs";

export const UserPostsPage: FC = () => {
    const {id} = useParams();
    const userId = Number(id);

    return (
        <div>
            <UserTabs userId={userId} />
            <h1>Посты пользователя {userId}</h1>
        </div>
    );
}
