import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { 
  // API types
  AddGoalInput, AddGoalParams, AddGoalOutput,
  GetGoalInput, GetGoalParams, GetGoalOutput, 
  GetGoalsInput, GetGoalsParams, GetGoalsOutput, 
  EditGoalInput,  EditGoalParams, EditGoalOutput, 
  DeleteGoalInput, DeleteGoalParams, DeleteGoalOutput, 
  // Store types
  GoalStoreState, GoalStoreActions,  
} from "./types/goal";
import { commonFetch } from "./_base/commonFetch";

export const useGoalStore = create<
  GoalStoreState & GoalStoreActions
  >()(
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

    addGoal: async (params: AddGoalParams, input: AddGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.addGoalLoading = true
      });

      return commonFetch<AddGoalOutput>({
        url: `/goal/${params.id}`,
        method: "POST",
        params: cleanParams,
        input: input
      }).then(({ data, status }) => {
        // Upon succeed, update the global state
        set((state) => { 
          state.goals = state.goals.concat(data);
          state.addGoalLoading = false;
        });
        return { data: data, status: status }
      }).catch((error) => {
        // Upon error, log the erro
        console.log(error);
      });
    },

    getGoal: async (params: GetGoalParams, input: GetGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.getGoalLoading = true
      });

      return commonFetch<GetGoalOutput>({
        url: `/goal/${params.id}`,
        method: "GET",
        params: cleanParams,
        input: input
      }).then(({ data, status }) => {
        // Upon succeed, return the data
        set((state) => { 
          state.getGoalOutput = data;
          state.getGoalLoading = false;
        });
        return { data: data, status: status }
      }).catch((error) => {
        // Upon failure, log the error 
        console.log(error);
      });
    },

    getGoals: async (params: GetGoalsParams, input: GetGoalsInput) => {
      set((state) => {
        state.getGoalsLoading = true
      });

      return commonFetch<GetGoalsOutput>({
        url: "/goals",
        method: "GET",
        params: params,
        input: input
      }).then(({ data, status }) => {
        // Upon succeed, set the global state
        set((state) => {
          state.goals = data.goals;
          state.getGoalsLoading = false;
        });
        return { data: data, status: status }
      }).catch((error) => {
        // Upon fail, log the error
        console.log(error);
      });
    },

    editGoal: async (params: EditGoalParams, input: EditGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.editGoalLoading = true
      });

      return commonFetch<EditGoalOutput>({
        url: `/goal/${params.id}`,
        method: "PUT",
        params: cleanParams,
        input: input
      }).then(({ data, status }) => {
        // Upon succeed, set the global state
        let elementId = get().goals.findIndex((goal) => goal.id === params.id);
        
        if (elementId != -1) {
          set((state) => {
            state.goals[elementId].name = input.name;
            state.goals[elementId].targetDate = input.targetDate;
            state.goals[elementId].lastUdpatedOn = input.lastUdpatedOn;
            state.editGoalLoading = false;
          });
        }
        return { data: data, status: status };
      }).catch((error) => {
        // Upon fail, log the error
        console.log(error);
      });
    },

    deleteGoal: async (params: DeleteGoalParams, input: DeleteGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.deleteGoalLoading = true
      });

      commonFetch<DeleteGoalOutput>({
        url: `/goal/${params.id}`,
        method: "DELETE",
        params: cleanParams,
        input: input
      }).then(({ data, status }) => {
        // Upon succeed, delete the Goal instance from the state
        let remainingGoals = get().goals.filter((goal) => goal.id !== params.id);

        set((state) => {
          state.goals = remainingGoals;
          state.deleteGoalLoading = false;
        });
        
        return { data: data, status: status };
      }).catch((error) => {
        // Upon fail, log the error
        console.log(error);
      });
    },
    })
  ))
);
