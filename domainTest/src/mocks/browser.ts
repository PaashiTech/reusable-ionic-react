// Setup mock API workers
// Doc ref: https://mswjs.io/docs/getting-started/integrate/browser

import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
