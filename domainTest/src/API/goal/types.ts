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

export type GetGoalsInput = {}


// API outputs 
export type CreateGoalOutput = {}

export type GetGoalOutput = Goal

export type UpdateGoalOutput = {}

export type DeleteGoalOutput = {}

export type GetGoalsOutput = {
  goals: Goal[]
}
