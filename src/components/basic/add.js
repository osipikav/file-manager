import path from "node:path";
import fs from "node:fs/promises";

export async function add(commandArgs) {
  try {
    const folderPath = path.resolve(process.cwd());
    await fs.writeFile(path.join(folderPath, commandArgs[0]), "");
    console.log("Operation successful");
  } catch (error) {
    console.error("Operation failed");
  }
}
