import fs from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

export async function hash(commandArg) {
  try {
    const filePath = path.resolve(process.cwd(), commandArg[0]);
    const data = await fs.readFile(filePath, "utf-8");
    const hash = createHash("sha256").update(data);
    const result = hash.digest("hex");
    console.log(result);
  } catch (error) {
    console.log("Operation failed:");
  }
}
