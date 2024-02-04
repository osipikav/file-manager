import path from "node:path";
import { createGunzip } from "zlib";
import fs from "node:fs";

export async function decompress(commandArgs) {
  try {
    const compressFilePath = path.resolve(process.cwd(), commandArgs[1]);
    const archiveFilePath = path.resolve(process.cwd(), commandArgs[0]);
    const readStream = fs.createReadStream(archiveFilePath);
    const writeStream = fs.createWriteStream(compressFilePath);
    const gunzipStream = createGunzip();
    readStream.pipe(gunzipStream).pipe(writeStream);
  } catch (error) {
    console.log("Operation failed");
  }
}
