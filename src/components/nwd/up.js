import process from "node:process";
import fs from "node:fs/promises";
import path from "node:path";

export async function up() {
  const folderPath = path.resolve(process.cwd(), "..");

  try {
    process.chdir(folderPath);
  } catch (error) {
    console.log(`Operation failed`);
  }
}
