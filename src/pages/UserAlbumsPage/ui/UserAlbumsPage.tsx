import { useParams } from "react-router-dom";
import { Error } from "@/shared/ui/Error/Error";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";
import { AlbumCard } from "@/entities/album/ui/AlbumCard";
import { LoadingSpinner } from "@/shared/ui/LoadingSpinner/LoadingSpinner";
import { useGetAlbumsByUserIdQuery } from "@/entities/album/api/albumsApi";

export const UserAlbumsPage = () => {
    const {id} = useParams();
    const userId = Number(id);

    if (isNaN(userId) || userId <= 0) {
        return <Error errorMessage="Некорректный ID пользователя" />;
    }

    const {data: albums, isLoading, isError, refetch} = useGetAlbumsByUserIdQuery(userId);

    return (
        <div>
            <UserTabs userId={userId} />
            <h2>Альбомы пользователя {userId}</h2>

            {isLoading && <LoadingSpinner />}
            {isError && <Error errorMessage="Ошибка загрузки альбомов" onRetry={refetch} />}
            
            {albums && albums.length === 0 && (
                <p>У пользователя нет альбомов</p>
            )}
            
            {albums && (
                <div>
                    {albums.map((album) => (
                        <AlbumCard key={album.id} album={album} />
                    ))}
                </div>
            )}
        </div>
    );
}
