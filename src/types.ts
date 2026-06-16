//creating the shape of objects to iteract with the api and within the codebase

export type FAQ = {
 
    question : string;
  
}

//assign each faq with an embedding vector
export type FAQEmbedding = {
    faq : FAQ;
    embedding : number[]
}


export type UserQuestion = {
    question:string;
}

export type UserQuestionEmbedding = {
    userQuestion :UserQuestion;
    embedding : number[];
}

export type SimilarityResult = {
  bestMatch: FAQEmbedding;
  bestScore: number;
};
