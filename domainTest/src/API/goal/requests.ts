import { GetGoalInput, CreateGoalInput, GetGoalsOutput } from "./types";
import { useFetch } from "../_base/useFetch";
import { Goal } from "../../types/goal";

export const useGetGoal = () => {
  // adding <Goal> after useFetch will give the "data" value the type Goal. 
  // This really helps to flesh out the quality of life for the API and is part
  // of creating something that is self documenting. We put Goal because we know
  // that is what this endpoint will always return. 
  const { commonFetch, isLoading, data } = useFetch<Goal>({
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

export const useCreateGoal = () => {
  const { commonFetch, isLoading, data } = useFetch<Goal>({
    url: "createGoal",
    method: "POST"
  });

  const createGoal = (input: CreateGoalInput) => commonFetch({ input });

  return { createGoal, isLoading, data };
}