import "./Goals.css"
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import { IonSpinner } from "@ionic/react";

import { Card } from "../_base/Card";
import { CardType } from "../_base/types";
import { EditGoalModal } from "./EditGoalModal";

import { Goal } from "../../types/goal";
import { GoalModalData } from "./types";
import { useGoalStore } from "../../stores/goalStore";

interface GoalsProps {}

const Goals: React.FC<GoalsProps> = () => {
  const [editGoalModalState, setEditGoalModalState] = useState(false);
  const [editGoalModalData, setEditGoalModalData] = useState<GoalModalData>({
    id: '',
    name: '', 
    targetDate: ""
  });
  const { 
    goals, 
    getGoals, 
    getGoalsLoading,
    deleteGoal
  } = useGoalStore(
    (state) => ({ 
      goals: state.goals,
      getGoals: state.getGoals, 
      getGoalsLoading: state.getGoalsLoading,
      deleteGoal: state.deleteGoal
    }),
    shallow
  );
  
  //// TODO: Calls the API twice with MSW mock. Pretty ok, but not perfect.
  useEffect(() => {getGoals(null, null)}, []);

  function showEditModal(data: GoalModalData) {
    setEditGoalModalData(data);
    setEditGoalModalState(true);
  }

  function showGoalCards() {
    const goalCards = goals?.map((goalData: Goal) => {
      return <Card 
        key={goalData.id}
        title={goalData.name}
        cardType={CardType.Goal}
        subtitle={"Due: " + goalData.targetDate.split('T')[0]}
        description={"Completed: " + goalData.completion + "%"}
        onEditButton={() => {
          showEditModal(
            { 
              id: goalData.id,
              name: goalData.name, 
              targetDate: goalData.targetDate.toString().split('T')[0]
            }
          )} 
        }
        onDeleteButton={() => deleteGoal({ id: goalData.id }, null) }
        ></Card>
    });
    return (
      <>
        <EditGoalModal
          isModalOpen={editGoalModalState}
          setIsModalOpen={setEditGoalModalState}
          modalPreviousData={editGoalModalData}
          >
        </EditGoalModal>
        {goalCards}
      </>
    )
  }

  return getGoalsLoading ? 
    <div className="loading-spinner-container">
      <IonSpinner className="loading-spinner"></IonSpinner>
    </div> : 
    showGoalCards();
}

export default Goals;