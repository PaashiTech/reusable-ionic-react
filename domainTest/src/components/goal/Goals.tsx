import "./Goals.css"
import { Card } from "../_base/Card";
import { CardType } from "../_base/types";
import { useGoalApi } from "../../API/goal/api";
import { useEffect, useState } from "react";
import { IonSpinner } from "@ionic/react";
import { Goal } from "../../types/goal";
import { GoalModalData } from "./types";
import { EditGoalModal } from "./EditGoalModal";

interface GoalsProps {}

const Goals: React.FC<GoalsProps> = () => {
  const [editGoalModalState, setEditGoalModalState] = useState(false);
  const [editGoalModalData, setEditGoalModalData] = useState<GoalModalData>({
    id: '',
    name: '', 
    targetDate: ""
  });
  const {
    editGoal: {
      query: editGoal,
      isLoading: editGoalLoading,
      data: editGoalData,
    },
    getGoals: {
      query: getGoals,
      isLoading: getGoalsLoading,
      data: getGoalsData
    }
  } = useGoalApi(editGoalModalData.id);
  
  //// TODO: Calls the API twice with MSW mock. Pretty ok, but not perfect.
  useEffect(() => {getGoals(null, null)}, [editGoalData]);

  function showEditModal(data: GoalModalData) {
    setEditGoalModalData(data);
    setEditGoalModalState(true);
  }

  function showGoalCards() {
    const goalCards = getGoalsData?.goals?.map((goalData: Goal) => {
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
        }></Card>
    });
    return (
      <>
        <EditGoalModal
          isModalOpen={editGoalModalState}
          setIsModalOpen={setEditGoalModalState}
          modalPreviousData={editGoalModalData}
          editGoalLoading={editGoalLoading}
          onSave={editGoal}
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