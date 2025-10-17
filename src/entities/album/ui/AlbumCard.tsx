import { Album } from "@/types/api";
import { Link } from "react-router-dom";
import styles from "./AlbumCard.module.css";

interface AlbumCardProps {
    album: Album;
}

export const AlbumCard = ({ album }: AlbumCardProps) => {
    return (
        <article className={styles.albumCard}>
            <Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
        </article>
    );
}
