import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { createContext, FC,ReactNode, useContext } from "react";

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

export const ModalHeader: FC<ModalSubComponentProps> = ({children, className}) => {
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

export const ModalBody: FC<ModalSubComponentProps> = ({children, className}) => {
    return (
        <div className={`${styles.body} ${className}`}>
          {children}
        </div>
    );
};

export const ModalFooter: FC<ModalSubComponentProps> = ({children, className}) => {
    return (
        <div className={`${styles.footer} ${className}`}>
          {children}
        </div>
    );
};

export const Modal: FC<ModalProps> & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
} = ({isOpen, onClose, children}) => {
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
