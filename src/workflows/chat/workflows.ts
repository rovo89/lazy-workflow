export async function myWorkflow() {
  "use workflow";
  await myStep();
}

export async function myStep() {
  "use step";
  return "hello";
}
