import os from "node:os";
import process from "node:process";
import readline from "node:readline";
import path from "node:path";
// import fs from "node:fs";
import { cd } from "./components/cd/cd.js";

const args = process.argv.slice(2);
const argsUsername = args[args.length - 1];
export const userHomeDirectory = os.homedir();

let currentPath = userHomeDirectory;

const username = argsUsername.startsWith("--username=")
  ? argsUsername.substring(11).trim()
  : "Guest";

function showWelcomeMessage(username) {
  console.log(`Welcome to the File Manager, ${username}!\n`);
}
function showGoodbyeMessage(username) {
  console.log(`Thank you for using File Manager, ${username}, goodbye!\n`);
}

startApp();

function startApp() {
  showWelcomeMessage(username);
  process.chdir(userHomeDirectory);
  showCurrentDirectory();
}

function showCurrentDirectory() {
  console.log(`You are currently in '${process.cwd()}'`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", async (input) => {
  const inputValues = input.split(" ").filter((value) => value !== "");
  const command = inputValues[0];
  const commandArgs = inputValues.slice(1);

  switch (command) {
    case "cd":
      await cd(currentPath, path.join(...commandArgs));
      break;

    case "os":
      console.log(command);
      break;

    default:
      console.log(`Invalid input`);
  }
  await showCurrentDirectory();
});

rl.on("close", () => {
  showGoodbyeMessage(username);
});
