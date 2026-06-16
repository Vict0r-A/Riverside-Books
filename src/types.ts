//creating the shape of objects to iteract with the api and within the codebase

export type FAQs = {
    id: number;
    question : string;
    answer : string;
}

//assign each faq with an embedding vector
export type FAQEmbedding = {
    faq : FAQs;
    embedding : number[]
}


export type UserQuestion = {
    question:string;
}

export type UserQuestionEmbedding = {
    userQuestion :UserQuestion;
    embedding : number[];
}