import path from "node:path";
import fs from "node:fs";

export async function cp(commandArgs) {
  try {
    const filePath = path.resolve(process.cwd(), commandArgs[0]);
    const newFolderPath = path.resolve(commandArgs[1]);
    const newFilePath = path.join(newFolderPath, path.basename(filePath));

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(newFilePath);

    readStream.pipe(writeStream);

    console.log("Operation successful");
  } catch (error) {
    console.log("Operation failed");
  }
}
