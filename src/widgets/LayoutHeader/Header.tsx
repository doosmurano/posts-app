import styles from "./Header.module.css";
import { FC, useState, Fragment } from "react";
import { Modal } from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";

export const Header: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <header className={styles.header}>
           <h1>Posts App</h1>

           <div>
              <Fragment>
                 <Button onClick={() => {
                     setIsModalOpen(true);
                 }}>О проекте</Button>

                 <ThemeSwitcher/>
              </Fragment>
           </div>

           <Modal
             isOpen={isModalOpen}
             onClose={handleCloseModal}
             >
                <Fragment>
                  <h2>О проекте</h2>
                  <p>Это приложение для просмотра постов</p>
                </Fragment>
             </Modal>
        </header>
    )
} 
