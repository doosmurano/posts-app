import { FC } from "react";
import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
        </div>
    )
}
