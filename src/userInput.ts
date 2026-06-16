const readline = require('node:readline/promises'); 
const { stdin: input, stdout: output } = require('node:process');

async function getUserInput() {
 
  const rl = readline.createInterface({ input, output });
  const userResponse = await rl.question("Hello, welcome to Riverside Books! How can we Help?\n> ");
   

  rl.close();
}

getUserInput();