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
  goal: Goal
};

export type GetGoalInput = null;

export type GetGoalsInput = null;

export type EditGoalInput = {
  name: string,
  targetDate: string,     /** ISO string */
  lastUdpatedOn: string
};

export type DeleteGoalInput = {
  id: number
};



// API outputs 
export type AddGoalOutput = {
  status: number,
  data: null
};

export type GetGoalOutput = {
  status: number,
  data: Goal
};

export type EditGoalOutput = {
  status: number,
  data: null
};

export type DeleteGoalOutput = {
  status: number,
  data: null
};

export type GetGoalsOutput = {
  status: number,
  data: null
};