import { GetGoalsOutput } from "../../API/goal/types";

export const goalsData: GetGoalsOutput = {
  goals: [
    {
      id: 0,
      name: "Car",
      targetDate: new Date("2024-03-31"),
      completion: 30
    },
    {
      id: 1,
      name: "House",
      targetDate: new Date("2026-12-31"),
      completion: 15
    },
    {
      id: 2,
      name: "iPhone",
      targetDate: new Date("2023-06-30"),
      completion: 60
    }
  ]
}
