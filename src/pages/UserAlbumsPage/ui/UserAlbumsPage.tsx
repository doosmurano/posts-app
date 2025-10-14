import { useParams } from "react-router-dom";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";

export const UserAlbumsPage = () => {
    const {id} = useParams();
    const userId = Number(id);

    return (
        <div>
            <UserTabs userId={userId} />
            <h1>Альбомы пользователя {id}</h1>
        </div>
    );
}
