import { Error } from "@/shared/ui/Error/Error";
import { Link, useParams } from "react-router-dom";
import { ItemList } from "@/shared/ui/ItemList/ItemList";
import { PhotoCard } from "@/entities/photo/ui/PhotoCard";
import styles from "@/pages/UserPostsPage/ui/UserPostsPage.module.css";
import { LoadingSpinner } from "@/shared/ui/LoadingSpinner/LoadingSpinner";
import { useGetAlbumByIdQuery, useGetPhotosByAlbumIdQuery } from "@/entities/album/api/albumsApi";

export const AlbumPhotosPage = () => {
    const {id} = useParams();

    const albumId = Number(id);

    if (isNaN(albumId) || albumId <= 0) {
        return <Error errorMessage="Некорректный ID альбома" />;
    }

    const {data: album} = useGetAlbumByIdQuery(albumId);
    const {data: photos, isLoading, isError, refetch} = useGetPhotosByAlbumIdQuery(albumId);

    return (
        <div>
            <div className={styles.backButtonContainer}>
              <Link to={`/users/${album?.userId}/albums`} className={styles.backButton}>НАЗАД</Link>
            </div>
            
            <h2>Фотографии альбома {albumId}</h2>

            {isLoading && <LoadingSpinner />}
            {isError && <Error errorMessage="Ошибка загрузки фотографий" onRetry={refetch} />}
            
            {photos && photos.length === 0 && (
                <p>В альбоме нет фотографий</p>
            )}
            
            <ItemList
              items={photos}
              renderItem={(photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              )}
            />
        </div>
    );
}
