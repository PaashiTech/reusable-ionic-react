import { 
  // Input types 
  CreateGoalInput, 
  GetGoalInput, 
  GetGoalsInput,
  DeleteGoalInput, 
  UpdateGoalInput,
  // Output types 
  CreateGoalOutput, 
  GetGoalOutput, 
  GetGoalsOutput,
  UpdateGoalOutput,
  DeleteGoalOutput,
  } from "./types";
import { useFetch } from "../_base/useFetch";

//// CREATE
export const useCreateGoal = () => {
  const { commonFetch, isLoading, data, status } = useFetch<CreateGoalOutput>({
    url: "createGoal",
    method: "POST"
  });

  const createGoal = (input: CreateGoalInput) => commonFetch({ input });

  return { createGoal, isLoading, data, status };
}


//// READ
export const useGetGoal = () => {
  // adding <Goal> after useFetch will give the "data" value the type Goal. 
  // This really helps to flesh out the quality of life for the API and is part
  // of creating something that is self documenting. We put Goal because we know
  // that is what this endpoint will always return. 
  const { commonFetch, isLoading, data, status } = useFetch<GetGoalOutput>({
    url: "/goal",
    method: "GET"
  });

  // using typescript to define the input here means no mistakes can be
  // made downstream when actually using our API layer
  const getGoal = (input: GetGoalInput) => commonFetch({ input });

  return { getGoal, isLoading, data, status };
}

export const useGetGoals = () => {
  const { commonFetch, isLoading, data, status } = useFetch<GetGoalsOutput>({
    url: "/goals",
    method: "GET"
  });

  const getGoals = (input: GetGoalsInput) => commonFetch({ input });

  return { getGoals, isLoading, data, status };
}


//// UPDATE
export const useUpdateGoal = () => {
  const { commonFetch, isLoading, data, status } = useFetch<UpdateGoalOutput>({
    url: "/updateGoal",
    method: "POST"
  });

  const updateGoal = (input: UpdateGoalInput) => commonFetch({ input });

  return { updateGoal, isLoading, data, status };
}

//// DELETE
export const useDeleteGoal = () => {
  const { commonFetch, isLoading, data, status } = useFetch<DeleteGoalOutput>({
    url: "/deleteGoal",
    method: "POST"
  });

  const deleteGoal = (input: DeleteGoalInput) => commonFetch({ input });

  return { deleteGoal, isLoading, data, status };
}
