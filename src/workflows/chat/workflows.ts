"use workflow";

import { myStep } from "./steps";

export async function myWorkflow() {
  await myStep();
}
