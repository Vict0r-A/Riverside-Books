// this logic will handle the conversion of text to embeddings for user input and FAQs

import OpenAI from "openai";
import { FAQ, FAQEmbedding } from "./types";
import { loadFAQs } from "./loadFAQ";

const openAIApiKey = process.env.OPENAI_API_KEY;

if (!openAIApiKey) {
  throw new Error("your api key is missing. Please check your .env file");
}

const openAIClient = new OpenAI({
  apiKey: openAIApiKey,
});

//helper function - this will embed one piecce of text
export async function createEmbedding(text: string): Promise<number[]> {
  const response = await openAIClient.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return response.data[0].embedding;
}

// this is what converts all questions to embeddings
export async function createFAQEmbeddings(faqsArray: FAQ[]): Promise<FAQEmbedding[]> {
  const faqEmbeddings: FAQEmbedding[] = [];

  for (const faq of faqsArray) {
    const textToEmbed = faq.question;

    const embedding = await createEmbedding(textToEmbed);

    faqEmbeddings.push({
      faq: faq,
      embedding: embedding,
    });
  }

  return faqEmbeddings;
}