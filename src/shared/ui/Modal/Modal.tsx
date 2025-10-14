import type { ReactNode } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { createContext, useContext } from "react";

interface ModalContextType {
    onClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
    const context = useContext(ModalContext);
     if(!context) throw new Error("useModalContext используется в ModalProvider");

    return context
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

interface ModalSubComponentProps {
    children: ReactNode;
    className?: string;
}

export const ModalHeader = ({children, className}: ModalSubComponentProps) => {
    const { onClose } =  useModalContext();

    return (
        <div className={`${styles.header} ${className}`}>
          {children}
          <button
            className={styles.closeButton}
            onClick={onClose}
          >
                X
          </button>
        </div>
    );
};

export const ModalBody = ({children, className}: ModalSubComponentProps) => {
    return (
        <div className={`${styles.body} ${className}`}>
          {children}
        </div>
    );
};

export const ModalFooter = ({children, className}: ModalSubComponentProps) => {
    return (
        <div className={`${styles.footer} ${className}`}>
          {children}
        </div>
    );
};

export const Modal = ({isOpen, onClose, children}: ModalProps) => {
    if (!isOpen) return null;

    return createPortal(
        <ModalContext.Provider value={{ onClose}}>
            <div onClick={onClose} className={styles.overlay}>
              <div onClick={(e) => e.stopPropagation()}
                className={styles.content}>
                {children}
              </div>
            </div>
        </ModalContext.Provider>,
        document.body
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
