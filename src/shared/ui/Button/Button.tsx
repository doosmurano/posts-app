import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button 
          className={styles.button}
           {...props}
        >
          {props.children}
        </button>
    );
};
