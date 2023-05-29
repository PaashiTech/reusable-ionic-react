import { ReactNode, useEffect, useRef } from "react";
import "./EditGoalModal.css"
import { Modal } from "../_base/Modal";
import { IonButton, IonDatetime, IonInput, IonItem, IonLabel } from "@ionic/react";
import { GoalModalData } from "./types";
import { EditGoalInput, EditGoalParams } from "../../API/goal/types";

interface EditGoalModalProps {
  children: ReactNode,
  isModalOpen: boolean,
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void,
  modalPreviousData: GoalModalData,
  setModalData: (value: React.SetStateAction<GoalModalData>) => void,
  editGoalId: string,
  onSave: (params: EditGoalParams, input: EditGoalInput) => Promise<void>
}

export const EditGoalModal: React.FC<EditGoalModalProps> = ({ 
  children,
  isModalOpen, 
  setIsModalOpen, 
  modalPreviousData,
  setModalData,
  editGoalId,
  onSave
  }) => {
    const nameInput = useRef<HTMLIonInputElement>(null);
    const targetDateInput = useRef<HTMLIonDatetimeElement>(null);

    const today: Date = new Date();
    const minDate: Date = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate: Date = new Date(today.getFullYear() + 100, today.getMonth(), 0);

    function getValidNewDate(dStr: string | string[] | null | undefined) {
      if (typeof(dStr) === "string") {
        return new Date(dStr);
      } else if (Array.isArray(dStr)) {
        return new Date(dStr[0]);
      } else {
        return maxDate;
      }
    }

    async function getModalData() {
      // Extract modal data here
      let modalData: GoalModalData = {
        name: nameInput.current?.value?.toString(),
        targetDateString: targetDateInput.current?.value
      };

      await onSave(
        { 
          id: editGoalId 
        }, 
        { 
          name: modalData.name!,
          targetDate: getValidNewDate(modalData.targetDateString),
          udpatedOn: today.toString()
        }
      );

      // Cause the parent to re-render 
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
          <IonInput 
            ref={nameInput} 
            type="text" 
            value={modalPreviousData.name}
            placeholder="Name of the goal" 
            aria-label="name"></IonInput>
        </IonItem>

        {/* Target date */}
        <IonDatetime 
          presentation="date"
          min={minDate.toISOString()}
          max={maxDate.toISOString()}
          value={modalPreviousData.targetDateString}
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
