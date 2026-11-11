import type { DrinkId } from "./menu";

export type QuizOption = { label: string; points: Partial<Record<DrinkId, number>> };
export type QuizQuestion = { question: string; options: QuizOption[] };

export const quizQuestions: QuizQuestion[] = [
  {
    question: "How strong do you like your coffee?",
    options: [
      { label: "Bold and intense", points: { espresso: 3, americano: 2 } },
      { label: "Balanced", points: { cappuccino: 2, "flat-white": 3 } },
      { label: "Soft and milky", points: { latte: 3, "iced-latte": 1 } },
    ],
  },
  {
    question: "Do you have a sweet tooth?",
    options: [
      { label: "Yes, the sweeter the better", points: { mocha: 3, "caramel-raf": 3 } },
      { label: "A little sweetness is nice", points: { latte: 1, cappuccino: 2 } },
      { label: "No sugar, please", points: { espresso: 2, americano: 2, "cold-brew": 2 } },
    ],
  },
  {
    question: "Hot or cold?",
    options: [
      { label: "Always hot", points: { cappuccino: 1, mocha: 1, "flat-white": 1 } },
      { label: "Depends on the weather", points: { latte: 1, americano: 1 } },
      { label: "Ice cold", points: { "iced-latte": 3, "cold-brew": 3 } },
    ],
  },
];

/** Adds up points from the chosen option of each question and returns the top drink. */
export function scoreQuiz(answers: number[]): DrinkId {
  const totals: Partial<Record<DrinkId, number>> = {};
  answers.forEach((optionIndex, q) => {
    const option = quizQuestions[q]?.options[optionIndex];
    if (!option) return;
    for (const [id, pts] of Object.entries(option.points)) {
      totals[id as DrinkId] = (totals[id as DrinkId] ?? 0) + (pts ?? 0);
    }
  });
  let best: DrinkId = "cappuccino";
  let bestScore = -1;
  for (const [id, score] of Object.entries(totals)) {
    if ((score ?? 0) > bestScore) {
      best = id as DrinkId;
      bestScore = score ?? 0;
    }
  }
  return best;
}
