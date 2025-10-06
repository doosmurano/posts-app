import { FC } from "react";
import styles from "./Error.module.css";
import { Button } from "../Button/Button";

interface ErrorProps {
    title?: string;
    errorMessage?: string;
    onRetry?: () => void;
}

export const Error: FC<ErrorProps> = ({
  title = "Ошибка загрузки",
  errorMessage = "Произошла ошибка при загрузке данных",
  onRetry = () => {},
}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.errorMessage}>{errorMessage}</p>
            <Button className={styles.retryButton} onClick={onRetry}>Попробовать снова</Button>
        </div>
    )
}
