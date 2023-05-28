import { Goal } from "../../types/goal";

// API inputs
export type CreateGoalInput = {
  goal: Goal,
  createdOn: string
  updatedOn: string
}

export type GetGoalInput = { 
  id: string 
};

export type UpdateGoalInput = {
  id: number,
  goal: Goal,
  udpatedOn: string
}

export type DeleteGoalInput = {
  id: number
}

export type GetGoalsInput = null


// API outputs 
export type CreateGoalOutput = null

export type GetGoalOutput = Goal

export type UpdateGoalOutput = null

export type DeleteGoalOutput = null

export type GetGoalsOutput = {
  goals: Goal[]
}
