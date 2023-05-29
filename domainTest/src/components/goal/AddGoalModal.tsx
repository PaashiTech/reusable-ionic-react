import { ReactNode, useRef } from "react";
import "./AddGoalModal.css"
import { Modal } from "../_base/Modal";
import { IonButton, IonDatetime, IonGrid, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";

interface AddGoalModalProps {
  children: ReactNode,
  isModalOpen: boolean,
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void,
  setModalData: (value: React.SetStateAction<AddGoalModalData>) => void
}

export interface AddGoalModalData {
  name: string | undefined,
  targetDateString: string | string[] | null | undefined
}

export const AddGoalModal: React.FC<AddGoalModalProps> = ({ 
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
      let modalData: AddGoalModalData = {
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
        title="Add Goal"
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
        <div className="save-button-container">
          <IonButton className="save-button" onClick={getModalData}>Save</IonButton>
        </div>
      </Modal>
    )
}
