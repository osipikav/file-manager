import process from "node:process";
import fs from "node:fs/promises";
import path from "node:path";

export async function ls() {
  try {
    const currentPath = process.cwd();
    const files = await fs.readdir(currentPath);
    const fileStats = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(currentPath, file);
        const info = await fs.stat(filePath);
        return { Name: file, Type: info.isDirectory() ? "directory" : "file" };
      })
    );
    fileStats.sort((a, b) => a.Type.localeCompare(b.Type));
    console.table(fileStats, ["Name", "Type"]);
  } catch (error) {
    console.log(`Operation failed`);
  }
}
