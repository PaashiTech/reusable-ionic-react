import { ReactNode, useRef } from "react";
import "./AddGoalModal.css"
import { Modal } from "./basic/Modal";
import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";

interface AddGoalModalProps {
  children: ReactNode,
  isModalOpen: boolean,
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void,
  setModalData: (value: React.SetStateAction<AddGoalModalData>) => void
}

export interface AddGoalModalData {
  name: string | undefined;
}

export const AddGoalModal: React.FC<AddGoalModalProps> = ({ 
  children,
  isModalOpen, 
  setIsModalOpen, 
  setModalData}) => {
    const nameInput = useRef<HTMLIonInputElement>(null);

    function getModalData() {
      // Extract modal data here
      const modalData: AddGoalModalData = {
        name: nameInput.current?.value?.toString()
      }
      setModalData(modalData);

      // Close the modal
      setIsModalOpen(false);
    }

    return (
      <Modal 
        title="Add Goal"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        >
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput ref={nameInput} type="text" placeholder="Your name" aria-label="name"></IonInput>
        </IonItem>
        <IonButton  onClick={getModalData}>Save</IonButton>
      </Modal>
    )
}
