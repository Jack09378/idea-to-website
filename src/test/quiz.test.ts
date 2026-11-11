import { describe, expect, it } from "vitest";
import { scoreQuiz } from "@/lib/quiz";

describe("coffee quiz", () => {
  it("recommends cold brew for milky, unsweetened, ice-cold answers", () => {
    expect(scoreQuiz([2, 2, 2])).toBe("cold-brew");
  });
  it("recommends mocha for milky, sweet, hot answers", () => {
    expect(scoreQuiz([2, 0, 0])).toBe("mocha");
  });
});
