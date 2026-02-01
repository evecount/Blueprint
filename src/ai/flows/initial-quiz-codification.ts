
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
# 📚 Primary 1 English: 2020 Sample Assessment (AI-Generated)

**Paper:** Topical Review 2020

**Level:** Primary 1

**Total Score:** 20 Marks

### ⚙️ Generative Guardrails Applied

* 
**Vocabulary:** Limited to themes of "Home" and "Garden" found in the 2018/2019 sets .


* 
**Grammar:** Uses the "yesterday" past-tense trigger and "every day" present-tense pattern .


* 
**Complexity:** Maximum 3 options for MCQs, mirroring the 2019 structure .



---

## Section A: Grammar ( mark)

Choose the correct answer and write its number in the brackets.

1. My mother **baked** (2) a delicious cake for my birthday last night.
* (1) bake | (2) baked | (3) baking


2. The cat jumped **over** (3) the small fence to catch the butterfly. 


* (1) in | (2) on | (3) over


3. "Is **this** (1) your pencil on the floor?" asked the teacher. 


* (1) this | (2) these | (3) those


4. We **are going** (2) to the library to read books now. 


* (1) is going | (2) are going | (3) was going


5. The tea is too hot because there is **much** (1) steam coming from the cup. 


* (1) much | (2) few | (3) little



---

## Section B: Vocabulary ( mark)

Fill in the blanks with the correct words from the box.

**Word Bank:** breakfast, delighted, excited, morning, present, school.

It was Monday **(6) morning**. Siti woke up early because she was **(7) excited** to go back to school. She ate her **(8) breakfast** quickly and put on her uniform. Her father gave her a small **(9) present** to put in her bag. Siti was **(10) delighted** and thanked her father before leaving home. 

---

## Section C: Synthesis ( marks)

Join the sentences using the word provided. 

11. The boy was hungry. He ate an apple. (**so**)
* **Answer:** The boy was hungry so he ate an apple.


12. I can run fast. I cannot swim well. (**but**)
* **Answer:** I can run fast but I cannot swim well.



---

## Section D: Comprehension (6 marks)

**Passage:**
One afternoon, Ali saw a little bird on the grass. Its wing was hurt and it could not fly. Ali took the bird home and put it in a box. He fed it some seeds and water every day. After a week, the bird felt better. Ali took the bird back to the garden. It chirped happily and flew away to the trees. Ali was happy to see the bird fly again.

13. Where did Ali find the bird? (1m)
* **Answer:** Ali found the bird on the grass.


14. Why could the bird not fly? (2m)
* **Answer:** The bird could not fly because its wing was hurt.


15. What did Ali feed the bird? (1m)
* **Answer:** He fed it some seeds and water.


16. How did the bird feel at the end of the story? (2m) 


* **Answer:** The bird felt better and was happy.



---

**~~ END OF SAMPLE PAPER ~~**

---
# 📚 Primary 1 English: 2021 Revision Assessment

**Paper:** Term 4 Revision 2

**Level:** Primary 1

**Total Score:** 25 Marks

---

## ⚙️ AI Agent: Generative Patterns & Instructions

* **Assessment Focus:** Advanced Primary 1 literacy including irregular past tense verbs and moral-based comprehension.
* 
**Grammar Patterns:** Focuses on quantifiers ("a little") , prepositions of movement ("over") , and past tense inflection (e.g., "wash" to "washed").


* 
**Vocabulary Themes:** Classic fables and nature-based scenarios.


* 
**Comprehension Goal:** Vocabulary identification ("Which word tells us...") and character motivation analysis.



---

## Section A: Grammar MCQ (5 marks)

Choose the correct answer and write its number (1, 2 or 3) in the brackets. 

1. May I have **a little** (2) gravy on my rice, please? 


2. The helicopter flies **over** (3) the sky. 


3. Sulin **washed** (3) her hands before eating the sandwich just now. 


4. "**How** (1) do you go to school every day?" Mrs Ong asked Lydia. 


5. Father took a taxi to work this morning as his car could not **start** (1). 



---

## Section B: Grammar Cloze (5 marks)

Fill in each blank with the correct form of the word in the brackets.  

It was David's first visit to the swimming pool. He **(6) went** (go) there with his father . He **(7) held** (hold) on to his father's hand tightly. He **(8) trembled** (tremble) in fear as his feet touched the water . His father **(9) knew** (know) he was scared . He **(10) patted** (pat) David's head and said, "Don't be scared" .

---

## Section C: Vocabulary MCQ (5 marks)

Choose the correct answer and write its number (1, 2 or 3) in the brackets. 

11. The car crashed into a **bulldozer** (1) when it was clearing a fallen tree. 


12. The giraffe is so tall that it has to **spread** (3) its legs when it wants to drink. 


13. The nervous contestants were waiting **anxiously** (2) for the results. 


14. July comes after **June** (2). 


15. The lamb **bleated** (3) when its mother was nowhere in sight. 



---

## Section D: Vocabulary Cloze (5 marks)

Fill in each blank with the most suitable word. Use each word once only.  

**Word Bank:** quietly, unfortunately, gathered, walked, covered.

One day, a wolf was hungry and wanted to eat a sheep. It **(16) covered** itself in a sheepskin . Then it crept **(17) quietly** to a field that had many sheep . When night came, the shepherd **(18) gathered** the sheep into a pen . When he left, the wolf **(19) walked** around to look for the fattest sheep . **(20) Unfortunately** for the wolf, the shepherd came back and picked the wolf to cook for his family .

---

## Section E: Open-Ended Comprehension (5 marks)

Read this passage carefully. Then answer the questions that follow. 

**Passage:**
A colony of frogs was hopping through the woods. Two of them, Bouncy and Bumpy, fell into a deep pit. When the other frogs saw how deep the pit was, they frowned. They told Bouncy and Bumpy they would never get out. The two frogs refused to believe them. Soon, Bumpy was tired and gave up. Bouncy continued to jump as hard as he could. Once again, the other frogs yelled at him to stop jumping. However, he jumped even harder and finally made it out! Bouncy's friends were amazed and wanted to know how he did it. He told them that he was deaf and could not hear them. He had thought that they were cheering him! 

**Questions:**
21. What were Bumpy and Bouncy doing when they fell into the hole?
* **Answer:** They were hopping through the woods. 
22. Where was Bumpy in the end?
* **Answer:** In the end, Bumpy was left in the pit. 
23. Which word in paragraph 4 tells us that Bouncy's friends were surprised?
* **Answer:** amazed. 
24. Sentence: Bouncy gave up jumping out of the pit.
* **Answer:** False. 
25. Sentence: The other frogs were cheering Bouncy to jump out of the pit.
* **Answer:** False. 

---

**~~ END OF CONSOLIDATED DATASET ~~**

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
