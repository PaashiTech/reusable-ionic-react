import { Goal } from "../../types/goal";

// API inputs
export interface CreateGoalInput {
  goal: Goal,
  createdOn: string
  updatedOn: string
}

export type GetGoalInput = { 
  id: string 
};

export interface UpdateGoalInput {
  id: number,
  goal: Goal,
  udpatedOn: string
}

export interface DeleteGoalInput {
  id: number
}

export interface GetGoalsOutput {
  goals: Goal[]
}
