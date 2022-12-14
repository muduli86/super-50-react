import { rest } from "msw";

//Data
import cardsResponse from "./cards.json";

const todoItems = [
  {
    id: "858e2e1e-7cb0-40c6-9c98-0a4b01e348dc",
    description: "Jogging",
    status: "Completed",
    dueDate: "2022-05-13T12:15:00",
  },
  {
    id: "c38c35e4-bbfd-485f-a537-49d14dff7870",
    description: "Meet Joe",
    status: "Completed",
    dueDate: "2022-05-13T12:15:00",
  },
  {
    id: "c48c35e4-bbfd-485f-a537-49d14dff7870",
    description: "Cooking",
    status: "Completed",
    dueDate: "2022-05-13T12:15:00",
  },
  {
    id: "s48c35e4-bbfd-485f-a537-49d14dff7870",
    description: "Cooking",
    status: "In-Progress",
    dueDate: "2022-05-13T12:15:00",
  },
];

export const handlers = [
  rest.get("/expanded-cards", (req, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(cardsResponse));
  }),
  rest.get("/expanded-cards1", (req, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(todoItems));
  }),
];
