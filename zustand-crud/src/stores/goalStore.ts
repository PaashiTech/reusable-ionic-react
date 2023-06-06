import { create } from "zustand";
import { Goal } from "../types/goal";
import { 
  AddGoalInput, AddGoalOutput, AddGoalParams, 
  GetGoalInput, GetGoalOutput, GetGoalParams, 
  GetGoalsInput, GetGoalsOutput, GetGoalsParams,
  EditGoalInput, EditGoalOutput, EditGoalParams, 
  DeleteGoalInput, DeleteGoalOutput, DeleteGoalParams, 
} from "./types/goal";

interface GoalStoreState {
  /** Main container for Goals */
  goals: Goal[],

  /** Loading statuses for APIs */
  addGoalLoading: boolean,
  getGoalLoading: boolean,
  getGoalsLoading: boolean,
  editGoalLoading: boolean,
  deleteGoalLoading: boolean,
}

interface GoalStoreActions {
  /** CREATE */
  addGoal: (params: AddGoalParams, data: AddGoalInput) => AddGoalOutput

  /** READ */
  getGoal: (params: GetGoalParams, data: GetGoalInput) => GetGoalOutput
  getGoals: (params: GetGoalsParams, data: GetGoalsInput) => GetGoalsOutput

  /** UPDATE */
  editGoal: (params: EditGoalParams, data: EditGoalInput) => EditGoalOutput

  /** DELETE */
  deleteGoal: (params: DeleteGoalParams, data: DeleteGoalInput) => DeleteGoalOutput
}

const useGoalStore = create<
  GoalStoreState 
  & GoalStoreActions
  >() ((set) => ({
  goals: [],
  addGoalLoading: false,
  getGoalLoading: false,
  getGoalsLoading: false,
  editGoalLoading: false,
  deleteGoalLoading: false,

  // TODO: Add implementation of the CRUD API
  })
)