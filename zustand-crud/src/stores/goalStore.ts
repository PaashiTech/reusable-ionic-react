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

  /** Output of getGoal */
  getGoalOutput: Goal | null,
}

interface GoalStoreActions {
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

const useGoalStore = create<
  GoalStoreState 
  & GoalStoreActions
  >() ((set, get) => ({
  goals: [],
  addGoalLoading: false,
  getGoalLoading: false,
  getGoalsLoading: false,
  editGoalLoading: false,
  deleteGoalLoading: false,
  getGoalOutput: null,

  // TODO: Add implementation of the CRUD API
  addGoal(params: AddGoalParams, data: AddGoalInput) {
    set((state) => ({ goals: state.goals.concat(data.goal)}));
    return { data: null, status: 200 }
  },

  getGoal(params, data) {
    set((state) => state);
    return { data: null, status: 200 }
  },

  getGoals(params, data) {
    set((state) => state);
    return { data: null, status: 200 }
  },

  editGoal(params, data) {
    set((state) => state);
    return { data: null, status: 200 }
  },

  deleteGoal(params, data) {
    set((state) => state);
    return { data: null, status: 200 }
  }
  })
)