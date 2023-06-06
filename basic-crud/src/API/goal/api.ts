import { 
  useAddGoal,
  useGetGoal, 
  useGetGoals, 
  useEditGoal 
} from "./requests";

export const useGoalApi = (goalId: string) => {
  // Use hooks for all APIs, get their state variables and data 
  const {
    addGoal,
    isLoading: createGoalLoading,
    data: createGoalData,
    status: createGoalStatus
  } = useAddGoal();

  const {
    getGoal,
    isLoading: getGoalLoading,
    data: getGoalData,
    status: getGoalStatus
  } = useGetGoal(goalId);

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
  } = useEditGoal(goalId);

  // Return them IN THE SAME ORDER as that of calling them. 
  return {
    addGoal: {
      mutation: addGoal,
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