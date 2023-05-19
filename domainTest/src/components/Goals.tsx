import "./Goals.css"
import { Card, CardType } from "./basic/Card";
import { useGoalApi } from "../API/goal/api";
import { useMemo } from "react";
import { IonLoading } from "@ionic/react";
import { Goal } from "../types/goal";

interface GoalsProps {}

const Goals: React.FC<GoalsProps> = () => {
  const {
    getGoals: {
      query: getGoals,
      isLoading: getGoalsLoading,
      data: getGoalsData
    }
  } = useGoalApi();
  
  //// TODO: Calls the API twice with MSW mock. Pretty ok, but not perfect.
  const _getGoalsPromise = useMemo(getGoals, []);

  function getGoalCards() {
    const goalCards = getGoalsData?.goals?.map((goalData: Goal) => {
      return <Card 
        key={goalData.id}
        title={goalData.name}
        cardType={CardType.Goal}
        subtitle={"Due: " + goalData.targetDate.toString().split('T')[0]}
        description={"Completed: " + goalData.completion + "%"}></Card>
    });
    return (
      <>
        {goalCards}
      </>
    )
  }

  return getGoalsLoading ? <IonLoading></IonLoading> : getGoalCards();
}

export default Goals;