import process from "node:process";
import fs from "node:fs/promises";
import path from "node:path";

export async function cd(currentPath, commandArg) {
  const folderPath = path.resolve(currentPath, commandArg);

  try {
    await fs.access(folderPath);
    process.chdir(folderPath);
    const files = await fs.readdir(folderPath);

    const fileStats = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(folderPath, file);
        const info = await fs.stat(filePath);
        return { Name: file, Type: info.isDirectory() ? "directory" : "file" };
      })
    );
    fileStats.sort((a, b) => a.Type.localeCompare(b.Type));
    console.table(fileStats, ["Name", "Type"]);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
