// Mock REST endpoints logic goes here
// Doc ref: https://mswjs.io/docs/getting-started/mocks/rest-api

import { rest } from "msw";
import { goalsData } from "./mock_data/goals";
import { AddGoalInput, EditGoalInput } from "../API/goal/types";

let goalsDataMutable = { ...goalsData };

export const handlers = [
  // Create a new goal
  rest.post('/goal', (req, res, ctx) => {
    req.json()
      .then((data: AddGoalInput) => {
        goalsDataMutable.goals.push(data.goal);
      })
    
    return res(
      ctx.status(200),
      ctx.json({})
    )
  }),

  // Update the goal given by `id`
  rest.put('/goal/:id', (req, res, ctx) => {
    const goalId = req.params.id;
    
    let matchedGoal = goalsDataMutable.goals.find((goal, i, obj) => {
      if (goal.id == goalId) {
        req.json().then((data: EditGoalInput) => {
          goalsDataMutable.goals[i].name = data.name;
          goalsDataMutable.goals[i].targetDate = data.targetDate;
        })
      }
    })

    return res(
      // ctx.delay(1000),       // To mock delay in the response 
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
