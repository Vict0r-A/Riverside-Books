//creating the shape of objects to iteract with the api and within the codebase

export type FAQ = {
 
    question : string;
    answer: string;
  
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


//the result of cosine similarity checking
//the best score being the score of the highest cosine similarity
// FAQembedding being the FAQ with the highest score
export type SimilarityResult = {
  bestMatch: FAQEmbedding;
  bestScore: number;
};
