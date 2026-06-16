//All FAQs must be converted into embeddings, openai api needs and array to do this
//this function will convert the json into an array


import faqs from "./faqs.json";
import fs from "node:fs";
import path from "node:path";
import { FAQs } from "./types";
export function loadFAQs() : FAQs[] {
    const fileLocation = path.join(process.cwd(), "src", "faqs.json");
    const fileContents = fs.readFileSync(fileLocation, "utf-8");
    const faqsArray = JSON.parse(fileContents) as FAQs[];

    return faqsArray;

}

console.log(loadFAQs())