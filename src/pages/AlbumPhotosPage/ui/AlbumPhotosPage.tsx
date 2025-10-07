import { FC } from "react";
import { useParams } from "react-router-dom";

export const AlbumPhotosPage: FC = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Фотографии альбома {id}</h1>
        </div>
    );
}
