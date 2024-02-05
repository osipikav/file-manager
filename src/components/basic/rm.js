import path from "node:path";
import fs from "node:fs/promises";

export async function rm(commandArgs) {
  try {
    const filePath = path.resolve(process.cwd(), commandArgs[0]);
    await fs.unlink(filePath);
    console.log("Operation successful");
  } catch (error) {
    console.log("Operation failed");
  }
}
