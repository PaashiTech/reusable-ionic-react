import { Goal } from "../../types/goal";

// API params
export type AddGoalParams = null;

export type GetGoalParams = { 
  id: string 
};

export type GetGoalsParams = null;

export type EditGoalParams = {
  id: string
};

export type DeleteGoalParams = null;


// API inputs
export type AddGoalInput = {
  goal: Goal,
  createdOn: string
  updatedOn: string
}

export type GetGoalInput = null;

export type EditGoalInput = {
  name: string,
  targetDate: string,     /** ISO string */
  udpatedOn: string
}

export type DeleteGoalInput = {
  id: number
}

export type GetGoalsInput = null


// API outputs 
export type AddGoalOutput = null

export type GetGoalOutput = Goal

export type EditGoalOutput = null

export type DeleteGoalOutput = null

export type GetGoalsOutput = {
  goals: Goal[]
}
