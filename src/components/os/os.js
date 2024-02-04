import os from "node:os";

export async function osPart(commandArg) {
  try {
    switch (commandArg[0]) {
      case "--EOL":
        console.log(`EOL: ${JSON.stringify(os.EOL)}`);
        break;

      case "--cpus":
        os.cpus().forEach((cpu, index) => {
          console.log(`CPU ${index + 1}: ${cpu.model} (${cpu.speed} GHz)`);
        });
        break;

      case "--homedir":
        console.log(`Home Directory: ${os.homedir()}`);
        break;

      case "--username":
        console.log(`Username: ${os.userInfo().username}`);
        break;

      case "--architecture":
        console.log(`CPU Architecture: ${os.arch()}`);
        break;

      default:
        console.log(`Invalid input`);
    }
  } catch (error) {
    console.log(`Operation failed`);
  }
}
