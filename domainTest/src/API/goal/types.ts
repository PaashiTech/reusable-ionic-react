import { Goal } from "../../types/goal";

export type GetGoalInput = { 
  id: string 
};

export type CreateGoalInput = {
  data: Goal,
  createdOn: Date
}
