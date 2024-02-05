import process from "node:process";
import fs from "node:fs/promises";
import path from "node:path";

export async function cd(commandArg) {
  try {
    const folderPath = path.resolve(process.cwd(), commandArg);
    await fs.access(folderPath);
    process.chdir(folderPath);
  } catch (error) {
    console.log(`Operation failed`);
  }
}
