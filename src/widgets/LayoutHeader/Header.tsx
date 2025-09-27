import { FC, useState } from "react";
import styles from "./Header.module.css";
import { Modal } from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";

export const Header: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <header className={styles.header}>
           <h1>Posts App</h1>

           <div>
              <Button onClick={() => {
                  setIsModalOpen(true);
              }}>О проекте</Button>
              <Button>
                Сменить тему
              </Button>
           </div>

           <Modal
             isOpen={isModalOpen}
             onClose={handleCloseModal}
             >
                <h2>О проекте</h2>
                <p>Это приложение для просмотра постов</p>
             </Modal>
        </header>
    )
} 
