import { useParams } from "react-router-dom";
import { Error } from "@/shared/ui/Error/Error";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";

export const UserAlbumsPage = () => {
    const {id} = useParams();
    const userId = Number(id);

    if (isNaN(userId) || userId <= 0) {
        return <Error errorMessage="Некорректный ID пользователя" />;
    }

    return (
        <div>
            <UserTabs userId={userId} />
            <h1>Альбомы пользователя {userId}</h1>
        </div>
    );
}
