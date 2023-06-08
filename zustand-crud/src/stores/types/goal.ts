import { Goal } from "../../types/goal";

/** 
 * Types for APIs 
 */
/** Params */
export type AddGoalParams = {
  id: string
};
export type GetGoalParams = { 
  id: string 
};
export type GetGoalsParams = null;
export type EditGoalParams = {
  id: string
};
export type DeleteGoalParams = {
  id: string
};

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
export type DeleteGoalInput = null;

/** Outputs */
export type AddGoalOutput = {
  status: number,
  data: null
};
export type GetGoalOutput = {
  status: number,
  data: Goal | null
};
export type GetGoalsOutput = {
  status: number,
  data: {
    goals: Goal[]
  }
};
export type EditGoalOutput = {
  status: number,
  data: null
};
export type DeleteGoalOutput = {
  status: number,
  data: null
};


/**
 * Types for the store
 */
export type GoalStoreState = {
  /** Main container for Goals */
  goals: Goal[] | null,

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
  addGoal: (params: AddGoalParams, data: AddGoalInput) => Promise<any>,

  /** READ */
  getGoal: (params: GetGoalParams, data: GetGoalInput) => Promise<any>,
  getGoals: (params: GetGoalsParams, data: GetGoalsInput) => Promise<any>,

  /** UPDATE */
  editGoal: (params: EditGoalParams, data: EditGoalInput) => Promise<any>,

  /** DELETE */
  deleteGoal: (params: DeleteGoalParams, data: DeleteGoalInput) => Promise<any>,
}