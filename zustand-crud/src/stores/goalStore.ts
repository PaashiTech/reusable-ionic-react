import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { 
  // API types
  AddGoalInput, AddGoalOutput, AddGoalParams, 
  GetGoalInput, GetGoalOutput, GetGoalParams, 
  GetGoalsInput, GetGoalsOutput, GetGoalsParams,
  EditGoalInput, EditGoalOutput, EditGoalParams, 
  DeleteGoalInput, DeleteGoalOutput, DeleteGoalParams, 
  // Store types
  GoalStoreState, GoalStoreActions,
} from "./types/goal";

const useGoalStore = create<
  GoalStoreState 
  & GoalStoreActions
  >() (
  immer(                          // To make state copying easier
  devtools(                       // To make debugging tool avaialbe in the browser
    (set, get) => ({
    goals: [],
    addGoalLoading: false,
    getGoalLoading: false,
    getGoalsLoading: false,
    editGoalLoading: false,
    deleteGoalLoading: false,
    getGoalOutput: null,

    // TODO: Add implementation of the CRUD API
    addGoal(params: AddGoalParams, data: AddGoalInput) {
      let output: AddGoalOutput = { data: null, status: 200 }; 
      
      set((state) => { 
        goals: state.goals.concat(data.goal) 
      });
      
      return output;
    },

    getGoal(params: GetGoalParams, data: GetGoalInput) {
      let output: GetGoalOutput = { data: null, status: 200 };

      set((state) => {
        state
      });
      
      return output;
    },

    getGoals(params: GetGoalsParams, data: GetGoalsInput) {
      let output: GetGoalsOutput = { data: null, status: 200 };
      
      set((state) => {
        state
      });

      return output;
    },

    editGoal(params: EditGoalParams, data: EditGoalInput) {
      let output: EditGoalOutput = { data: null, status: 200 };
      
      set((state) => {
        state
      });
      
      return output;
    },

    deleteGoal(params: DeleteGoalParams, data: DeleteGoalInput) {
      let output: DeleteGoalOutput = { data: null, status: 200 };

      set((state) => {
        state
      });

      return output;
    }
    })
  ))
)