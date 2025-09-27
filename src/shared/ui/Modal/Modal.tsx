import { FC,ReactNode } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return createPortal(
        <div onClick={onClose} className={styles.overlay}
        >
            <div onClick={(e) => e.stopPropagation()}
                className={styles.content}>
                {children}
            </div>
        </div>,
        document.body
    );
};
