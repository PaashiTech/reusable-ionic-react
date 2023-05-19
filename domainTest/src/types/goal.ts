export type Goal = {
  id: number,
  name:string, 
  targetDate: Date, 
  completion: number, 
  details?: any
}

export interface GetGoalsData {
  goals: Goal[]
}

export interface CreateGoalData {
  goal: Goal,
  createdOn: string
  updatedOn: string
}

export interface UpdateGoalData {
  id: number,
  goal: Goal,
  udpatedOn: string
}

export interface DeleteGoalData {
  id: number
}

export interface GetGoalData {
  id: number
}
