import "./Goals.css"
import { Card } from "../_base/Card";
import { CardType } from "../_base/types";
import { useGoalApi } from "../../API/goal/api";
import { useMemo, useState } from "react";
import { IonLoading } from "@ionic/react";
import { Goal } from "../../types/goal";
import { GoalModalData } from "./types";
import { EditGoalModal } from "./EditGoalModal";

interface GoalsProps {}

const Goals: React.FC<GoalsProps> = () => {
  const {
    editGoal: {
      query: editGoal,
      isLoading: editGoalLoading,
      data: editGoalData,
      status: editGoalStatus
    },
    getGoals: {
      query: getGoals,
      isLoading: getGoalsLoading,
      data: getGoalsData,
      status: getGoalsStatus
    }
  } = useGoalApi();
  
  //// TODO: Calls the API twice with MSW mock. Pretty ok, but not perfect.
  useMemo(() => {return getGoals(null, null)}, []);

  const [editGoalModalState, setEditGoalModalState] = useState(false);
  const [editGoalModalData, setEditGoalModalData] = useState<GoalModalData>({
    name: '', 
    targetDateString: ""
  });

  function showEditModal(data: GoalModalData) {
    setEditGoalModalData(data);
    setEditGoalModalState(true);
  }

  function getGoalCards() {
    const goalCards = getGoalsData?.goals?.map((goalData: Goal) => {
      return <Card 
        key={goalData.id}
        title={goalData.name}
        cardType={CardType.Goal}
        subtitle={"Due: " + goalData.targetDate.toString().split('T')[0]}
        description={"Completed: " + goalData.completion + "%"}
        onEditButton={() => {
          showEditModal({ 
            name: goalData.name, 
            targetDateString: goalData.targetDate.toString().split('T')[0] 
          })} 
        }></Card>
    });
    return (
      <>
        <EditGoalModal
          isModalOpen={editGoalModalState}
          modalPreviousData={editGoalModalData}
          setModalData={setEditGoalModalData}
          setIsModalOpen={setEditGoalModalState}
          >
        </EditGoalModal>
        {goalCards}
      </>
    )
  }

  return getGoalsLoading ? <IonLoading></IonLoading> : getGoalCards();
}

export default Goals;