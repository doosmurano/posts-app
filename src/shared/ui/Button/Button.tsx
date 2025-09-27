import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    console.log('Button render');
    return (
        <button 
          className={styles.button}
           {...props}
        >
          {props.children}
        </button>
    );
};
