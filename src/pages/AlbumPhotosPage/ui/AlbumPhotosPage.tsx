import { useParams } from "react-router-dom";

export const AlbumPhotosPage = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Фотографии альбома {id}</h1>
        </div>
    );
}
