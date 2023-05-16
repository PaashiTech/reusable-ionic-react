import "./Goals.css"
import { Card, CardType } from "./basic/Card";

interface GoalsData {
  goals: {
    id: number,
    name:string, 
    dueOn: Date, 
    completion: number, 
    details?: any
  }[],
  meta?: any
}

interface GoalsProps {}

const goalsData: GoalsData = {
  goals: [
    {
      id: 0,
      name: "Car",
      dueOn: new Date("2024-03-31"),
      completion: 30
    },
    {
      id: 1,
      name: "House",
      dueOn: new Date("2026-12-31"),
      completion: 15
    },
    {
      id: 2,
      name: "iPhone",
      dueOn: new Date("2023-06-30"),
      completion: 60
    }
  ]
}

const Goals: React.FC<GoalsProps> = () => {
  const goalCards = goalsData.goals.map((goalData) => {
    return <Card 
      key={goalData.id}
      title={goalData.name}
      cardType={CardType.Goal}
      subtitle={"Due: " + goalData.dueOn.toDateString()}
      description={"Completed: " + goalData.completion + "%"}></Card>
  });
  return (
    <>
      {goalCards}
    </>
  )
}

export default Goals;