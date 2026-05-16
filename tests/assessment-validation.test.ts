import {
  assessmentSubmitSchema,
  careerProgressSchema,
} from "@/lib/validators";

describe("assessmentSubmitSchema", () => {
  it("rejects client-supplied score fields", () => {
    const result = assessmentSubmitSchema.safeParse({
      answers: [{ questionId: "c" + "a".repeat(24), optionId: "c" + "b".repeat(24) }],
      scores: { SWE: 999 },
      primary: "SWE",
    });
    expect(result.success).toBe(false);
  });

  it("rejects malformed ids", () => {
    const result = assessmentSubmitSchema.safeParse({
      answers: [{ questionId: "not-valid!", optionId: "c" + "b".repeat(24) }],
    });
    expect(result.success).toBe(false);
  });

  it("accepts a minimal valid payload shape", () => {
    const result = assessmentSubmitSchema.safeParse({
      answers: [
        {
          questionId: "c" + "a".repeat(24),
          optionId: "c" + "b".repeat(24),
        },
      ],
    });
    expect(result.success).toBe(true);
  });
});

describe("careerProgressSchema", () => {
  it("rejects duplicate milestone indices", () => {
    const result = careerProgressSchema.safeParse({
      careerId: "c" + "a".repeat(24),
      completedMilestones: [0, 0, 1],
    });
    expect(result.success).toBe(false);
  });
});
