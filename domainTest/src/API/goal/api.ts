import { 
  useCreateGoal,
  useGetGoal, 
  useGetGoals, 
  useEditGoal 
} from "./requests";

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

  const {
    editGoal,
    isLoading: editGoalLoading,
    data: editGoalData,
    status: editGoalStatus
  } = useEditGoal();

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
    },
    editGoal: {
      query: editGoal,
      isLoading: editGoalLoading,
      data: editGoalData,
      status: editGoalStatus
    }
  }
}