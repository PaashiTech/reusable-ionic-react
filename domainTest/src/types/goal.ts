export type Goal = {
  id: number,
  name:string, 
  dueOn: Date, 
  completion: number, 
  details?: any
}

export interface GetGoalsData {
  goals: Goal[],
  meta?: any
}
