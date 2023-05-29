import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import "./Modal.css"
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode,
  title: string,
  isModalOpen: boolean,
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void
}

export const Modal: React.FC<ModalProps> = ({ children, title, isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <IonModal isOpen={isModalOpen} className="modal">
        {/* Header */}
        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsModalOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        {/* Content */}
        <IonContent>
          <div className="modal-content">
            {children}
          </div>
        </IonContent>
      </IonModal>
    </>
  )
}
