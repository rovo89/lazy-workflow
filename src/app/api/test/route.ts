import { myWorkflow } from "@/workflows/chat/workflows";
import { start } from "workflow/api";

export async function GET() {
  await start(myWorkflow);
  return new Response("Hello, world!");
}
