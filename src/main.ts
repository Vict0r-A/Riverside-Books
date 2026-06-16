import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import "dotenv/config";
import { loadFAQs } from "./loadFAQ";
import { createEmbedding, createFAQEmbeddings } from "./embeddings";
import { cosineSimilarityCheck } from "./similarityCheck";
//entry point of the program, run from here
async function main() {
 // Load and embed the FAQ questions once at startup so each user question can be compared quickly.
  const faqs = loadFAQs();
  const faqEmbeddings = await createFAQEmbeddings(faqs);

  const rl = readline.createInterface({ input, output });

  console.log("Hello, welcome to Riverside Books!");

  while (true) {
    const userQuestion = await rl.question(
      "How can we help? Type quit or exit to leave.\n> "
    );

    if (
      userQuestion.toLowerCase() === "quit" ||
      userQuestion.toLowerCase() === "exit"
    ) {
      console.log("Goodbye! Thank you for visiting us!");
      break;
    }

    const userEmbedding = await createEmbedding(userQuestion);

    const result = cosineSimilarityCheck(userEmbedding, faqEmbeddings);
// Use a similarity threshold so unrelated questions do not return a weak FAQ match.
    if (result.bestScore < 0.7) {
      console.log("Sorry, I couldn't find a good answer for that. Try another question: ");
      continue;
    }

    console.log(result.bestMatch.faq.answer);
  }

  rl.close();
}

main();