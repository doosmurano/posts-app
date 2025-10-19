import { useParams } from "react-router-dom";
import { Error } from "@/shared/ui/Error/Error";
import { PhotoCard } from "@/entities/photo/ui/PhotoCard";
import { LoadingSpinner } from "@/shared/ui/LoadingSpinner/LoadingSpinner";
import { useGetPhotosByAlbumIdQuery } from "@/entities/album/api/albumsApi";

export const AlbumPhotosPage = () => {
    const {id} = useParams();

    const albumId = Number(id);

    if (isNaN(albumId) || albumId <= 0) {
        return <Error errorMessage="Некорректный ID альбома" />;
    }

    const {data: photos, isLoading, isError, refetch} = useGetPhotosByAlbumIdQuery(albumId);

    return (
        <div>
            <h2>Фотографии альбома {albumId}</h2>

            {isLoading && <LoadingSpinner />}
            {isError && <Error errorMessage="Ошибка загрузки фотографий" onRetry={refetch} />}
            
            {photos && photos.length === 0 && (
                <p>В альбоме нет фотографий</p>
            )}
            
            {photos && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    {photos.map((photo) => (
                        <PhotoCard key={photo.id} photo={photo} />
                    ))}
                </div>
            )}
        </div>
    );
}
