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
  const { commonFetch, isLoading, data } = useFetch<CreateGoalOutput>({
    url: "createGoal",
    method: "POST"
  });

  const createGoal = (input: CreateGoalInput) => commonFetch({ input });

  return { createGoal, isLoading, data };
}


//// READ
export const useGetGoal = () => {
  // adding <Goal> after useFetch will give the "data" value the type Goal. 
  // This really helps to flesh out the quality of life for the API and is part
  // of creating something that is self documenting. We put Goal because we know
  // that is what this endpoint will always return. 
  const { commonFetch, isLoading, data } = useFetch<GetGoalOutput>({
    url: "/goal",
    method: "GET"
  });

  // using typescript to define the input here means no mistakes can be
  // made downstream when actually using our API layer
  const getGoal = (input: GetGoalInput) => commonFetch({ input });

  return { getGoal, isLoading, data };
}

export const useGetGoals = () => {
  const { commonFetch, isLoading, data } = useFetch<GetGoalsOutput>({
    url: "/goals",
    method: "GET"
  });

  const getGoals = () => commonFetch({});

  return { getGoals, isLoading, data };
}


//// UPDATE
export const useUpdateGoal = () => {
  const { commonFetch, isLoading, data } = useFetch<UpdateGoalOutput>({
    url: "/updateGoal",
    method: "POST"
  });

  const updateGoal = (input: UpdateGoalInput) => commonFetch({ input });

  return { updateGoal, isLoading, data };
}

//// DELETE
export const useDeleteGoal = () => {
  const { commonFetch, isLoading, data } = useFetch<DeleteGoalOutput>({
    url: "/deleteGoal",
    method: "POST"
  });

  const deleteGoal = (input: DeleteGoalInput) => commonFetch({ input });

  return { deleteGoal, isLoading, data };
}
