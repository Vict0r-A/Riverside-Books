import { FAQEmbedding, SimilarityResult } from "./types";

function cosineSimilarity(
  userInputVector: number[],
  faqVector: number[]
): number {
  let dotProduct = 0;
  let userInputMagnitude = 0;
  let faqMagnitude = 0;

  // Loop through both vectors and calculate the values needed for cosine similarity.
  for (let i = 0; i < userInputVector.length; i++) {
    dotProduct += userInputVector[i] * faqVector[i];
    userInputMagnitude += userInputVector[i] * userInputVector[i];
    faqMagnitude += faqVector[i] * faqVector[i];
  }

  userInputMagnitude = Math.sqrt(userInputMagnitude);
  faqMagnitude = Math.sqrt(faqMagnitude);

  if (userInputMagnitude === 0 || faqMagnitude === 0) {
    return 0;
  }

  return dotProduct / (userInputMagnitude * faqMagnitude);
}

export function cosineSimilarityCheck(
  userEmbedding: number[],
  faqEmbeddings: FAQEmbedding[]
): SimilarityResult {
  let bestMatch = faqEmbeddings[0];
  let bestScore = -1;

  // Compare the user's question embedding against every FAQ embedding.
  for (const faqEmbedding of faqEmbeddings) {
    const score = cosineSimilarity(userEmbedding, faqEmbedding.embedding);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faqEmbedding;
    }
  }

  return {
    bestMatch,
    bestScore,
  };
}