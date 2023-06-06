import { 
  // Param Types 
  AddGoalParams,
  GetGoalParams,
  GetGoalsParams,
  EditGoalParams,
  DeleteGoalParams,
  // Input types 
  AddGoalInput, 
  GetGoalInput, 
  GetGoalsInput,
  EditGoalInput,
  DeleteGoalInput, 
  // Output types 
  AddGoalOutput, 
  GetGoalOutput, 
  GetGoalsOutput,
  EditGoalOutput,
  DeleteGoalOutput,
} from "./types";
import { useFetch } from "../_base/useFetch";

//// CREATE
export const useAddGoal = () => {
  const { commonFetch, isLoading, data, status } = useFetch<AddGoalOutput>({
    url: "/goal",
    method: "POST"
  });

  const addGoal = (
    params: AddGoalParams, 
    input: AddGoalInput
  ) => commonFetch({ params, input });

  return { addGoal, isLoading, data, status };
}


//// READ
export const useGetGoal = (goalId: string) => {
  // adding <Goal> after useFetch will give the "data" value the type Goal. 
  // This really helps to flesh out the quality of life for the API and is part
  // of creating something that is self documenting. We put Goal because we know
  // that is what this endpoint will always return. 
  const { commonFetch, isLoading, data, status } = useFetch<GetGoalOutput>({
    url: `/goal/${goalId}`,
    method: "GET"
  });

  // using typescript to define the input here means no mistakes can be
  // made downstream when actually using our API layer
  const getGoal = (
    params: GetGoalParams,
    input: GetGoalInput
  ) => commonFetch({ params, input });

  return { getGoal, isLoading, data, status };
}

export const useGetGoals = () => {
  const { commonFetch, isLoading, data, status } = useFetch<GetGoalsOutput>({
    url: "/goals",
    method: "GET"
  });

  const getGoals = (
    params: GetGoalsParams,
    input: GetGoalsInput
  ) => commonFetch({ params, input });

  return { getGoals, isLoading, data, status };
}


//// UPDATE
export const useEditGoal = (goalId: string) => {
  const { commonFetch, isLoading, data, status } = useFetch<EditGoalOutput>({
    url: `/goal/${goalId}`,
    method: "PUT"
  });

  const editGoal = (
    params: EditGoalParams,
    input: EditGoalInput
  ) => commonFetch({ params, input });

  return { editGoal, isLoading, data, status };
}


//// DELETE
export const useDeleteGoal = (goalId: string) => {
  const { commonFetch, isLoading, data, status } = useFetch<DeleteGoalOutput>({
    url: `/goal/${goalId}`,
    method: "DELETE"
  });

  const deleteGoal = (
    params: DeleteGoalParams,
    input: DeleteGoalInput
  ) => commonFetch({ params, input });

  return { deleteGoal, isLoading, data, status };
}
