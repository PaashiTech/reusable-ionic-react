import { ReactNode, useRef } from "react";
import "./EditGoalModal.css"
import { Modal } from "../_base/Modal";
import { IonButton, IonDatetime, IonInput, IonItem, IonLabel } from "@ionic/react";
import { GoalModalData } from "./types";

interface EditGoalModalProps {
  children: ReactNode,
  isModalOpen: boolean,
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void,
  setModalData: (value: React.SetStateAction<GoalModalData>) => void
}

export const AddGoalModal: React.FC<EditGoalModalProps> = ({ 
  children,
  isModalOpen, 
  setIsModalOpen, 
  setModalData}) => {
    const nameInput = useRef<HTMLIonInputElement>(null);
    const targetDateInput = useRef<HTMLIonDatetimeElement>(null);

    const today: Date = new Date();
    const minDate: Date = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate: Date = new Date(today.getFullYear() + 100, today.getMonth(), 0);

    function getModalData() {
      // Extract modal data here
      let modalData: GoalModalData = {
        name: nameInput.current?.value?.toString(),
        targetDateString: targetDateInput.current?.value?.toString().split('T')[0]
      };
      setModalData(modalData);

      // Close the modal
      setIsModalOpen(false);
    }

    function isFutureDay(dateString: string) {
      const date = new Date(dateString);

      return today < date;
    }

    return (
      <Modal 
        title="Edit Goal"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        >
        {/* Name of the goal */}
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput ref={nameInput} type="text" placeholder="Name of the goal" aria-label="name"></IonInput>
        </IonItem>
        {/* Target date */}
        <IonDatetime 
          presentation="date"
          min={minDate.toISOString()}
          max={maxDate.toISOString()}
          className="datetime-selector" 
          isDateEnabled={isFutureDay}
          ref={targetDateInput}>
          <span slot="title">Select a target Date</span>
        </IonDatetime>
        {/* Save button */}
        <IonButton onClick={getModalData}>Save</IonButton>
      </Modal>
    )
}
