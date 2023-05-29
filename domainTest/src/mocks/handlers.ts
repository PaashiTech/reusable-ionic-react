// Mock REST endpoints logic goes here
// Doc ref: https://mswjs.io/docs/getting-started/mocks/rest-api

import { rest } from "msw";
import { goalsData } from "./mock_data/goals";
import { EditGoalInput } from "../API/goal/types";

let goalsDataMutable = goalsData;

export const handlers = [
  rest.post('/editGoal', (req, res, ctx) => {
    const goalId = req.url.searchParams.get('id');
    
    let matchedGoal = goalsDataMutable.goals.find((goal, i, obj) => {
      if (goal.id == goalId) {
        req.json().then((data: EditGoalInput) => {
          goalsDataMutable.goals[i].name = data.name;
          goalsDataMutable.goals[i].targetDate = data.targetDate;
        })
      }
    })

    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),

  // Send all goals 
  rest.get('/goals', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(goalsDataMutable)
    )
  }),
]
