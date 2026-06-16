## Approach and Reasoning

### Matching approach

I chose an embedding-based semantic search approach. This is where all FAQ's are cnverted into embedding vectors via the OpenAI API. When the user asks asks a question, their input is also converted into an embedding via the API. Then, the system compares the vectors via cosine similarity to map the user question to the correct FAQ.

I chose this approach because it can match words based on semantic meaning, whereas a more basic keyword matching does not take this into account. Semantic meaning is important as the exact same word in different contexts can mean completely different things. 
I believe this embedding approach made the chatbot more robust and flexible.


### Handling no good answer

The chatbot uses a similarity threshold. After finding the FAQ with the highest cosine similarity score, the bot checks whether that score is high enough. If the score is below the threshold, the bot returns a fallback response instead of giving a potentially incorrect answer.

This reduces the risk of returning an unrelated FAQ answer when the user's question does not match the available FAQ data.

### Tradeoffs

The main benefit of this approach is that it supports semantic matching, so users do not need to type the exact wording used in the FAQ file. It is more flexible and natural than exact string matching or simple keyword matching.

The tradeoff is that using an external embedding API introduces latency and cost. Each user question needs to be sent to the API to create an embedding, which is slower than local keyword matching. There is also a dependency on the OpenAI API being available via the internet.

Another tradeoff is accuracy. Embeddings are good at finding meaning, but they are not perfect. A question can sometimes match the wrong FAQ if the wording is vague or if multiple FAQs are similar. The confidence threshold helps reduce this risk, but it may also reject some valid questions if the threshold is too strict.

The hallucination risk is lower than a fully generative chatbot because this bot does not invent answers. It only returns answers from the provided FAQ data. However, it can still return the wrong FAQ if the similarity match is poor, so the fallback threshold is important.

### What I would improve with more time

- Add unit tests, I didnt because I didnt want to run over 2 hours
- Cache the FAQ embeddings so they do not need to be recreated every time the app starts.
- Reduce API cost and improve startup speed by reusing stored embeddings.
- Test a local embedding model as a lower-cost offline alternative.
- If I needed to scale the application, I may use a vector database.
- Adding a frontend to enhance the user experience.


## How to Run the Bot

Install dependencies:

```bash
npm install

Create a .env file in the project root:


Run the bot from the project root:
npx ts-node src/main.ts

