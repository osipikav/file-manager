import path from "node:path";
import { createGzip } from "zlib";
import fs from "node:fs";

export async function compress(commandArgs) {
  try {
    const compressFilePath = path.resolve(process.cwd(), commandArgs[0]);
    const archiveFilePath = path.resolve(process.cwd(), commandArgs[1]);

    const readStream = fs.createReadStream(compressFilePath);
    const writeStream = fs.createWriteStream(archiveFilePath);
    const gzipStream = createGzip();
    readStream.pipe(gzipStream).pipe(writeStream);
  } catch (error) {
    console.log("Operation failed");
  }
}
