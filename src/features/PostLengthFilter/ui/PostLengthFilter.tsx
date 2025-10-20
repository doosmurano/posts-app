import { ChangeEventHandler } from "react";
import styles from "./PostLengthFilter.module.css";
import { PostLengthFilter as PostLengthFilterType } from "@/types/api";

interface PostLengthFilterProps {
    filter: PostLengthFilterType;
    onChange: (filter: PostLengthFilterType) => void;
}

export const PostLengthFilter = ({ filter, onChange }: PostLengthFilterProps) => {
    const handleFilterChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        onChange(event.target.value as PostLengthFilterType);
    };
    
    return (
        <div className={styles.filterContainer}>
            <label className={styles.filterName}>
                Длина заголовка
            </label>
            <select
                className={styles.filterSelect}
                value={filter}
                onChange={handleFilterChange}
            >
                <option value={PostLengthFilterType.ALL}>Все</option>
                <option value={PostLengthFilterType.LONGEST_FIRST}>Сначала длинные</option>
                <option value={PostLengthFilterType.SHORTEST_FIRST}>Сначала короткие</option>
            </select>
        </div>
    );
}
