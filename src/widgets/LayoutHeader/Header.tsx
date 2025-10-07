import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FC, useState, Fragment } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button } from "@/shared/ui/Button/Button";
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";

export const Header: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
           <h1>Posts App</h1>
          </Link>
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
              <Modal.Header>
                  <h2>О проекте</h2>
              </Modal.Header>
              <Modal.Body>
                <p>Это приложение для просмотра постов и комментариев</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleCloseModal}>ЗАКРЫТЬ</Button>
              </Modal.Footer>
            </Modal>
        </header>
    );
} 
