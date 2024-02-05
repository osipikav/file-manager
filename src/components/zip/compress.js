import path from "node:path";
import { createBrotliCompress } from "zlib";
import fs from "node:fs";

export async function compress(commandArgs) {
  try {
    const compressFilePath = path.resolve(process.cwd(), commandArgs[0]);
    const archiveFilePath = path.resolve(process.cwd(), commandArgs[1]);
    const readStream = fs.createReadStream(compressFilePath);
    const writeStream = fs.createWriteStream(archiveFilePath);
    const brotliStream = createBrotliCompress();
    readStream.pipe(brotliStream).pipe(writeStream);
    console.log("Operation successful");
  } catch (error) {
    console.log("Operation failed");
  }
}
