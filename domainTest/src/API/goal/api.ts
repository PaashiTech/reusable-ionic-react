import { useGetGoal, useGetGoals, useCreateGoal } from "./requests";

export const useGoalApi = () => {
  // Use hooks for all APIs, get their state variables and data 
  const {
    createGoal,
    isLoading: createGoalLoading,
    data: createGoalData,
    status: createGoalStatus
  } = useCreateGoal();

  const {
    getGoal,
    isLoading: getGoalLoading,
    data: getGoalData,
    status: getGoalStatus
  } = useGetGoal();

  const {
    getGoals,
    isLoading: getGoalsLoading,
    data: getGoalsData,
    status: getGoalsStatus
  } = useGetGoals();

  // Return them IN THE SAME ORDER as that of calling them. 
  return {
    createGoal: {
      mutation: createGoal,
      isLoading: createGoalLoading,
      data: createGoalData,
      status: createGoalStatus
    },
    getGoal: {
      query: getGoal,
      isLoading: getGoalLoading,
      data: getGoalData,
      status: getGoalStatus
    },
    getGoals: {
      query: getGoals,
      isLoading: getGoalsLoading,
      data: getGoalsData,
      status: getGoalsStatus
    }
  }
}