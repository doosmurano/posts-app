import { FC } from "react";
import { PostLengthFilter as PostLengthFilterType } from "../../../types/api";

interface PostLengthFilterProps {
    filter: PostLengthFilterType;
    onChange: (filter: PostLengthFilterType) => void;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ 
    filter, 
    onChange 
}) => {
    return (
        <div>
            <label>
                Длина заголовка
            </label>
            <select
                value={filter}
                onChange={(event) => onChange(event.target.value as PostLengthFilterType)}
            >
                <option value="все">Все</option>
                <option value="сначала длинные">Сначала длинные</option>
                <option value="сначала короткие">Сначала короткие</option>
            </select>
        </div>
    );
}
