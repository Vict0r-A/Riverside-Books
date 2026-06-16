//All FAQs must be converted into embeddings, openai api needs and array to do this
//this function will convert the json into an array of questions


import faqs from "./faqs.json";
import fs from "node:fs";
import path from "node:path";
import { FAQ } from "./types";
export function loadFAQs() : FAQ[] {
    const fileLocation = path.join(process.cwd(), "faqs.json");
    const fileContents = fs.readFileSync(fileLocation, "utf-8");
    const faqsArray = JSON.parse(fileContents) as FAQ[];


    return faqsArray;

}
