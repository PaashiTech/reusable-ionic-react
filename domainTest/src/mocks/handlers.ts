// Mock REST endpoints logic goes here
// Doc ref: https://mswjs.io/docs/getting-started/mocks/rest-api

import { rest } from "msw";
import { goalsData } from "./mock_data/goals";

export const handlers = [
  // Send all goals 
  rest.get('/goals', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(goalsData)
    )
  }),
]
