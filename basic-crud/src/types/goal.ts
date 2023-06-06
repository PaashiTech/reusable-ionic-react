/**
 * Global type for Goal objects.
 */
export type Goal = {
  /** Unique ID for the Goal. Expected - uuid v4 string */
  id: string,
  /** Name of the Goal */
  name: string, 
  /** Completion date of the Goal */
  completion: number, 
  /** Target date for the Goal to be completed by. Expected - ISO date string. */
  targetDate: string,
  /** Date when the Goal was created. Expected - ISO date string. */
  createdOn: string,
  /** Date when the Goal was last updated. Expected - ISO date string. */
  lastUpdatedOn: string,
  details?: any
}
