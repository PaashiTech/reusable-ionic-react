import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { 
  // API types
  AddGoalInput, AddGoalParams, 
  GetGoalInput, GetGoalParams, 
  GetGoalsInput, GetGoalsParams,
  EditGoalInput,  EditGoalParams, 
  DeleteGoalInput, DeleteGoalParams, 
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

    addGoal: async (params: AddGoalParams, data: AddGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.addGoalLoading = true
      });

      commonFetch({
        url: `/goal/${params.id}`,
        method: "POST",
        params: cleanParams,
        input: data
      }).then((response) => {
        // Upon succeed, update the global state
        set((state) => { 
          state.goals = state.goals.concat(data.goal);
          state.addGoalLoading = false;
        });
        return { data: response.data, status: response.status }
      }).catch((error) => {
        // Upon error, log the erro
        console.log(error);
      });
    },

    getGoal: async (params: GetGoalParams, data: GetGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.getGoalLoading = true
      });

      commonFetch({
        url: `/goal/${params.id}`,
        method: "GET",
        params: cleanParams,
        input: data
      }).then((value) => {
        // Upon succeed, return the data
        set((state) => { 
          state.getGoalOutput = value.data.goal;
          state.getGoalLoading = false;
        });
        return { data: value.data, status: value.status }
      }).catch((error) => {
        // Upon failure, log the error 
        console.log(error);
      });
    },

    getGoals: async (params: GetGoalsParams, data: GetGoalsInput) => {
      set((state) => {
        state.getGoalsLoading = true
      });

      commonFetch({
        url: "/goals",
        method: "GET",
        params: params,
        input: data
      }).then((value) => {
        // Upon succeed, set the global state
        set((state) => {
          state.goals = value.data.goals;
          state.getGoalsLoading = false;
        });
        return { data: value.data, status: value.status }
      }).catch((error) => {
        // Upon fail, log the error
        console.log(error);
      });
    },

    editGoal: async (params: EditGoalParams, data: EditGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.editGoalLoading = true
      });

      commonFetch({
        url: `/goal/${params.id}`,
        method: "PUT",
        params: params,
        input: data
      }).then((value) => {
        let elementId = get().goals.findIndex((goal) => goal.id === params.id);
        // Upon succeed, set the global state
        if (elementId != -1) {
          set((state) => {
            state.goals[elementId].name = data.name;
            state.goals[elementId].targetDate = data.targetDate;
            state.goals[elementId].lastUdpatedOn = data.lastUdpatedOn;
            state.editGoalLoading = false;
          });
        }
        return { data: value.data, status: value.status };
      }).catch((error) => {
        // Upon fail, log the error
        console.log(error);
      });
    },

    deleteGoal: async (params: DeleteGoalParams, data: DeleteGoalInput) => {
      // To omit specific fields from params (e.g. id)
      const { 
        id: _, 
        ...cleanParams 
      } = params;
      set((state) => {
        state.deleteGoalLoading = true
      });

      commonFetch({
        url: `/goal/${params.id}`,
        method: "DELETE",
        params: cleanParams,
        input: data
      }).then((value) => {
        set((state) => {
          state.deleteGoalLoading = false;
        });
        // Upon succeed, delete the Goal instance from 
        return { data: value.data, status: value.status };
      }).catch((error) => {
        // Upon fail, log the error
        console.log(error);
      });
    },
    })
  ))
);
