import path from "node:path";
import fs from "node:fs/promises";

export async function cat(commandArgs) {
  try {
    const filePath = path.resolve(process.cwd(), commandArgs[0]);
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.log("Operation failed");
  }
}
