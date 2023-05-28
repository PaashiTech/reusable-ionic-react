import { Goal } from "../../types/goal";

// API params
export type CreateGoalParams = null;

export type GetGoalParams = { 
  id: string 
};

export type UpdateGoalParams = null;

export type DeleteGoalParams = null;

export type GetGoalsParams = null;


// API inputs
export type CreateGoalInput = {
  goal: Goal,
  createdOn: string
  updatedOn: string
}

export type GetGoalInput = null;

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
