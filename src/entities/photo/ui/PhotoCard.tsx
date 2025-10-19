import styles from "./PhotoCard.module.css";
import { Photo } from "@/entities/photo/model/types";

interface PhotoCardProps {
    photo: Photo;
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
    return (
        <article className={styles.photoCard}>
            <img 
              src={photo.thumbnailUrl} 
              alt={photo.title} 
              className={styles.photoUrl} />
        </article>
    );
}
