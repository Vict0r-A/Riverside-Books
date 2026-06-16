import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { createEmbedding } from "./embeddings";
//take user input. from this user input, convert it into an embedding via the createEmbedding function

export async function getUserInputEmbedding(): Promise<number[]> {
  const rl = readline.createInterface({ input, output });

  const userResponse = await rl.question(
    "Hello, welcome to Riverside Books! How can we help?\n> "
  );

  rl.close();

  const userEmbedding = await createEmbedding(userResponse);

  return userEmbedding;
}