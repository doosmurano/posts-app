import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";

export const UserTodosPage: FC = () => {
    const {id} = useParams();
    const userId = Number(id);

    return (
        <div>
            <UserTabs userId={userId} />
            <h1>Задачи пользователя {id}</h1>
        </div>
    );
}
