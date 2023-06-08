import { Goal } from "../../types/goal";

/** 
 * Types for APIs 
 */
/** Params */
export type AddGoalParams = null;
export type GetGoalParams = { 
  id: string 
};
export type GetGoalsParams = null;
export type EditGoalParams = {
  id: string
};
export type DeleteGoalParams = null;

/** Inputs */
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

/** Outputs */
export type AddGoalOutput = {
  status: number,
  data: null
};
export type GetGoalOutput = {
  status: number,
  data: Goal | null
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


/**
 * Types for the store
 */
export type GoalStoreState = {
  /** Main container for Goals */
  goals: Goal[],

  /** Loading statuses for APIs */
  addGoalLoading: boolean,
  getGoalLoading: boolean,
  getGoalsLoading: boolean,
  editGoalLoading: boolean,
  deleteGoalLoading: boolean,

  /** Output of getGoal */
  getGoalOutput: Goal | null,
}

export type GoalStoreActions = {
  /** CREATE */
  addGoal: (params: AddGoalParams, data: AddGoalInput) => AddGoalOutput,

  /** READ */
  getGoal: (params: GetGoalParams, data: GetGoalInput) => GetGoalOutput,
  getGoals: (params: GetGoalsParams, data: GetGoalsInput) => GetGoalsOutput,

  /** UPDATE */
  editGoal: (params: EditGoalParams, data: EditGoalInput) => EditGoalOutput,

  /** DELETE */
  deleteGoal: (params: DeleteGoalParams, data: DeleteGoalInput) => DeleteGoalOutput,
}