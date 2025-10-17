import { useParams } from "react-router-dom";
import { Error } from "@/shared/ui/Error/Error";

export const AlbumPhotosPage = () => {
    const {id} = useParams();

    const albumId = Number(id);

    if (isNaN(albumId) || albumId <= 0) {
        return <Error errorMessage="Некорректный ID альбома" />;
    }

    return (
        <div>
            <h1>Фотографии альбома {albumId}</h1>
        </div>
    );
}
