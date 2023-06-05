import { GetGoalsOutput } from "../../API/goal/types";

export let goalsData: GetGoalsOutput = {
  goals: [
    {
      id: "b5c1ac40-08ba-43f7-99bc-12db7cb50ef6",
      name: "Car",
      targetDate: "2024-03-31T00:00:00.000Z",
      completion: 30,
      createdOn: "2023-05-31T00:00:00.000Z",
      lastUpdatedOn: "2023-05-31T00:00:00.000Z"
    },
    {
      id: "f5bd01b1-cd3b-488b-99d0-3970faf2bf7a",
      name: "House",
      targetDate: "2026-12-31T00:00:00.000Z",
      completion: 15,
      createdOn: "2023-05-31T00:00:00.000Z",
      lastUpdatedOn: "2023-05-31T00:00:00.000Z"
    },
    {
      id: "0b710ce4-8566-4911-9357-0a97cfd5e9e8",
      name: "iPhone",
      targetDate: "2023-06-30T00:00:00.000Z",
      completion: 60,
      createdOn: "2023-05-31T00:00:00.000Z",
      lastUpdatedOn: "2023-05-31T00:00:00.000Z"
    }
  ]
}
