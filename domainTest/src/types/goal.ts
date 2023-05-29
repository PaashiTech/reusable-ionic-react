export type Goal = {
  id: string,
  name: string, 
  targetDate: string,       /** ISO string */ 
  completion: number, 
  details?: any
}
