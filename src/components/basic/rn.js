import path from "node:path";
import fs from "node:fs/promises";

export async function rn(commandArgs) {
  try {
    const filePath = path.resolve(process.cwd(), commandArgs[0]);
    const renameFilePath = path.join(path.parse(filePath).dir, commandArgs[1]);
    await fs.rename(filePath, renameFilePath);
    console.log("Operation successful");
  } catch (error) {
    console.log("Operation failed");
  }
}
