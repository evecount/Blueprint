
'use server';

/**
 * @fileOverview Converts and codifies quiz questions from uploaded text content.
 *
 * - generateQuiz - A function that handles the quiz question conversion and codification process.
 * - GenerateQuizInput - The input type for the generateQuiz function.
 * - GenerateQuizOutput - The return type for the generateQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuizInputSchema = z.object({
  content: z.string().describe('The text content to generate a quiz from (e.g., from a markdown file).'),
  resourceName: z.string().describe('The name of the resource being uploaded (e.g. Chapter 1, Study Guide)'),
});
export type GenerateQuizInput = z.infer<typeof GenerateQuizInputSchema>;

const GenerateQuizOutputSchema = z.object({
  codifiedQuestions: z
    .string()
    .describe('A JSON string containing an array of quiz questions and answers.'),
});
export type GenerateQuizOutput = z.infer<typeof GenerateQuizOutputSchema>;

export async function generateQuiz(input: GenerateQuizInput): Promise<GenerateQuizOutput> {
  return generateQuizFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuizPrompt',
  input: {schema: GenerateQuizInputSchema},
  output: {schema: GenerateQuizOutputSchema},
  prompt: `You are an expert curriculum designer tasked with codifying study materials into JSON-formatted quiz questions, with a specialization in Singapore Primary 1 English.

You will be provided with text content and a resource name. Your primary goal is to extract and format quiz questions based on this content.

**MASTER REFERENCE: EXAMPLE P1 ENGLISH ASSESSMENTS**
To guide you, here are master reference documents outlining the typical structure and patterns of a Primary 1 English paper. If the resource name indicates the content is for 'Primary 1 English', you MUST use these as your primary guides for question style and rationale complexity.

---
# 📚 Primary 1 English: 2018 Topical Assessment 1

**Paper:** English Language Test 3 

**Level:** Primary 1 

**Date:** 19 October 2018 

**Duration:** 45 minutes 

**Total Score:** 20 Marks 

---

## ⚙️ AI Agent: Generative Patterns & Instructions

* 
**Educational Context**: Primary 1 English in Singapore.


* 
**Grammar Patterns**: Focuses on past tense ("yesterday"), present continuous for groups ("are waiting"), superlatives ("neatest"), and quantifiers ("little" vs "few").


* 
**Vocabulary Themes**: Animal enclosures at the zoo and natural environments .


* 
**Synthesis Structure**: Joining two simple sentences using "so" (cause/effect) or "but" (contradiction) .


* 
**Comprehension Goal**: Direct literal extraction ("Why did he chop...") and causal inference ("Why did he decide not to...").



---

## Section A: Grammar ( mark)

Read the sentences carefully. Tick () the correct answers.

1. Jason **ate** pancakes for breakfast yesterday .


* [ ] eats
* [] ate
* [ ] eating


2. The children **are waiting** for their mother at the library .


* [ ] was waiting
* [] are waiting
* [ ] is waiting


3. Amy has the **neatest** handwriting in her class .


* [ ] neat
* [ ] neater
* [] neatest


4. "**Whose** pencil is this?" asked Mrs Goh .


* [ ] Which
* [ ] Who's
* [] Whose


5. The chocolate cake is not sweet enough because there is too **little** sugar in it .


* [ ] much
* [ ] few
* [] little


6. Alex placed the ball **into** the box so that it would not roll away .


* [] into
* [ ] over
* [ ] under



---

## Section B: Vocabulary ( mark)

Fill in the blanks with the correct words from the box. Use each word once only .

**Word Bank:** boring, enclosures, frightened, interesting, making, photographs, places, watching.

Tom and his parents were at the zoo. Near the entrance, Tom pointed at the parrots and said, "Look at their colourful feathers." He took out his camera and snapped some **(7) photographs** . They then went to visit the other animal **(8) enclosures**. Walking past the tigers' enclosure, they heard a very loud roar that **(9) frightened** Tom . Quickly, he hid behind his father. During the animal show, they enjoyed **(10) watching** the animals perform many tricks . It was a very **(11) interesting** show. They had a fun-filled day at the zoo.

---

## Section C: Synthesis and Transformation ( marks)

Join the two sentences to form a sentence using the word provided. The meaning of the sentences must not change .

12. Ben took a nap. Ben was tired. (**so**) .


* 
**Answer:** Ben was tired so he took a nap.




13. An ostrich has wings. An ostrich cannot fly. (**but**) .


* 
**Answer:** An ostrich has wings but cannot fly.





---

## Section D: Comprehension (5 marks)

Read the passage carefully and answer the following questions. Your answers must be based on the passage .

**Passage:**
There was an apple tree in Bala's garden. Bala enjoyed eating the sweet apples. As years passed, some birds and bees built their homes on the tree. One day, Bala decided to chop down the tree to make some chairs and a table. He was going to sell them to make some money. Some squirrels which were playing nearby saw what Bala was doing. They begged him to stop. However, he ignored them.

Suddenly, some honey from the beehive dropped onto Bala's hand. He smiled after tasting it. When a swarm of bees saw Bala smile, they said, "We promise to give you some of our honey every day if you save our home." Bala agreed immediately. The birds cheered when they heard the good news .

**Questions:**
14. Bala wanted to chop down the apple tree because he... (Tick  correct answer) .
* [ ] wanted to eat the apples.
* [] wanted to make some furniture.
* [ ] did not want the animals to live in it.

15. What did the squirrels do to help save the bees' home?.


* 
**Answer:** They begged Bala not to cut down the tree.




16. Why did Bala decide not to chop down the tree?.


* 
**Answer:** The bees promised that they would give Bala some of their honey every day if Bala would not chop down their tree and Bala agreed.





---

**~~ END OF PAPER ~~** 

---
# 📚 Primary 1 English: 2019 Topical Assessment

**Paper:** English Language Review 2 - 2019 **Level:** Primary 1 **Date:** 30 October 2019 **Duration:** 45 minutes **Total Score:** 20 Marks 

---

## ⚙️ AI Agent: Generative Patterns & Instructions

* 
**Assessment Focus:** Foundational grammar (Verb agreement/tenses) and thematic vocabulary (Nature/Insects).


* 
**Syntactic Complexity:** Introduction of "Synthesis and Transformation," requiring the use of conjunctions ("so", "but") to combine simple clauses .


* 
**Comprehension Theme:** Life lessons/Habit formation (specifically dental hygiene) .


* 
**Question Distribution:** 6 Grammar MCQs, 5 Vocabulary fill-in-the-blanks, 2 Synthesis questions, and 5 marks for Comprehension.



---

## Section A: Grammar ( mark)

Read the sentences carefully. Tick () the correct answers. 

1. Ahmad and Raju **are** very good friends. 


* [ ] is
* [ ] was
* [] are


2. The pencil is **cheaper** than the pen. 


* [ ] cheap
* [] cheaper
* [ ] cheapest


3. The children **visited** their grandparents last week. 


* [ ] visit
* [ ] visits
* [] visited


4. Brian kicked the ball so hard that it flew **over** the fence. 


* [ ] in
* [ ] on
* [] over


5. Tom **goes** to the library with his mother every Sunday. 


* [ ] go
* [] goes
* [ ] went


6. "Look at **those** birds flying in the sky!" shouted Huiling excitedly. 


* [ ] that
* [ ] these
* [] those



---

## Section B: Vocabulary ( mark)

Fill in the blanks with the correct words from the box. Use each word once only. 

**Word Bank:** amazing, climbing, crawling, insects, move, skin, turn, wings. 

Danny loves butterflies. He thinks butterflies are the most interesting **(7) insects** in the world. He likes to look at their colourful **(8) wings**. Once, Danny saw a caterpillar **(9) crawling** on a leaf. His mother told him that the caterpillar would one day **(10) turn** into a butterfly.  "That is **(11) amazing**!" Danny exclaimed. He was happy to learn more about butterflies. 

---

## Section C: Synthesis and Transformation ( marks)

Join the two sentences to form a sentence using the word provided. 

12. The children stayed indoors. It was a rainy day. (**so**) 


* 
**Answer:** It was a rainy day so the children stayed indoors. 




13. Gina can sing. Gina cannot dance. (**but**) 


* 
**Answer:** Gina can sing but cannot dance. 





---

## Section D: Comprehension (5 marks)

Read the passage carefully and answer the following questions. 

**Passage:**
"Sam, why haven't you brushed your teeth?" Sam's mother asked him angrily. Though Sam did not like to brush his teeth, his mother always made sure that he brushed them twice a day. One day, Sam's parents had a wedding dinner to attend. Since they were going to be home late, Sam spent the night at his grandparents' house. Sam felt happy as he knew that his grandparents would not make him brush his teeth. However, something happened that night which made Sam change his mind. When Sam entered his grandparents' room to wish them good night, he saw his grandfather removing a set of teeth. "Did grandpa lose his teeth because he did not brush them?" Sam wondered. After that night, Sam always brushed his teeth when he woke up in the morning and before he went to bed. His mother did not have to remind him again. 

**Questions:**
14. Sam's mother always reminded him to... (Tick  correct answer) 
* [] brush his teeth. 
* [ ] visit his grandparents.
* [ ] wish his grandparents good night.

15. Sam's parents would be home late because they... (Tick  correct answer) 


* [ ] were angry with Sam.
* [] had to attend a wedding dinner. 


* [ ] wanted Sam to stay with his grandparents.


16. Where did Sam spend the night? 


* 
**Answer:** Sam spent the night at his grandparents' house. 




17. Why did Sam change his mind about the importance of brushing his teeth? 


* 
**Answer:** Sam knew that it was important to brush his teeth because he was afraid that he would have no teeth like his grandfather. 





---

**~~ END OF PAPER ~~** 

---

**YOUR TASK:**

You will be provided with text content and a resource name. Your task is to extract quiz questions from the text and convert them into a JSON array of objects. Each object must have the following keys:
- question: The text of the question.
- answers: An array of strings, with 4-5 possible answers.
- correctAnswerIndex: The index of the correct answer in the answers array.
- rationale: A detailed explanation of why the correct answer is correct and the others are wrong.

**CRITICAL INSTRUCTION: Rationale Complexity and Curriculum Awareness**
- **If the Resource Name is 'Primary 1 English'**: You MUST follow the patterns in the master reference. The rationale must use simple, direct language a child can understand. AVOID complex jargon. For example, instead of "the simple past tense is required", say "the story happened yesterday, so we need a word for the past".
- **For other primary school levels**: Use simple, direct language.
- **For secondary and advanced levels**: You can use more formal and technical language.

Focus on accuracy and completeness. Ensure the JSON is valid and can be parsed without errors. Be very careful that 'correctAnswerIndex' is an integer between 0 and the number of answers - 1. If a question cannot be reliably converted, it should be excluded.

Resource Name: {{{resourceName}}}
Content: {{{content}}}`,
});

const generateQuizFlow = ai.defineFlow(
  {
    name: 'generateQuizFlow',
    inputSchema: GenerateQuizInputSchema,
    outputSchema: GenerateQuizOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
