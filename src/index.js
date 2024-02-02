const args = process.argv.slice(2);
const argsUsername = args[args.length - 1];

const username = argsUsername.startsWith("--username=")
  ? argsUsername.substring(11).trim()
  : "Guest";

function showWelcomeMessage(username) {
  console.log(`Welcome to the File Manager, ${username}!\n`);
}
function showGoodbyeMessage(username) {
  console.log(`Thank you for using File Manager, ${username}, goodbye!\n`);
}

showWelcomeMessage(username);
process.on("exit", () => showGoodbyeMessage(username));
