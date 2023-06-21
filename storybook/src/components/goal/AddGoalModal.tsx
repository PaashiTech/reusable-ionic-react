import { v4 as uuidv4 } from "uuid";
import { ReactNode, useRef } from "react";
import "./AddGoalModal.css"
import { Modal } from "../_base/Modal";
import { IonButton, IonDatetime, IonInput, IonItem, IonLabel } from "@ionic/react";
import { GoalModalData } from "./types";
import { AddGoalInput } from "../../API/goal/types";
import { useGoalApi } from "../../API/goal/api";
import { useGoalStore } from "../../stores/goalStore";

interface AddGoalModalProps {
  children: ReactNode,
  isModalOpen: boolean,
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void
}

export const AddGoalModal: React.FC<AddGoalModalProps> = ({ 
  children,
  isModalOpen, 
  setIsModalOpen}) => {
    const goalId = uuidv4();
    const addGoal = useGoalStore((state) => state.addGoal );

    const nameInput = useRef<HTMLIonInputElement>(null);
    const targetDateInput = useRef<HTMLIonDatetimeElement>(null);

    const today: Date = new Date();
    const minDate: Date = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate: Date = new Date(today.getFullYear() + 100, today.getMonth(), 0);

    function getValidNewDate(dStr: string | string[] | null | undefined) {
      if (typeof(dStr) === "string") {
        return new Date(dStr).toISOString();
      } else if (Array.isArray(dStr)) {
        return new Date(dStr[0]).toISOString();
      } else {
        return maxDate.toISOString();
      }
    }

    function onAddGoal() {
      // Extract modal data here
      let modalData: GoalModalData = {
        id: goalId,
        name: nameInput.current?.value?.toString(),
        targetDate: targetDateInput.current?.value?.toString().split('T')[0]
      };

      const addGoalInput: AddGoalInput = {
        goal: {
          id: modalData.id,
          name: modalData.name!,
          targetDate: getValidNewDate(modalData.targetDate),
          completion: 0,
          createdOn: today.toISOString(),
          lastUpdatedOn: today.toISOString()
        },
      }

      addGoal(null, addGoalInput)
        .then(value => {
          // Close the modal
          setIsModalOpen(false);
        })
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
          <IonButton className="save-button" onClick={onAddGoal}>Create</IonButton>
        </div>
      </Modal>
    )
}
