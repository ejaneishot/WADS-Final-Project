// prisma/seed.ts
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

type RoleTag = "SWE" | "FE" | "BE" | "AI" | "SEC" | "GAME" | "QA" | "PM";
type ScoringItem = { tag: RoleTag; weight: number };

const quizSlug = "tech-career-matcher-v1";

function scoringJson(
  scoring?: ScoringItem[],
): Prisma.InputJsonValue | undefined {
  if (!scoring || scoring.length === 0) return undefined;
  return scoring as unknown as Prisma.InputJsonValue;
}

async function seedCareers() {
  const count = await prisma.career.count();
  if (count > 0) return;

  await prisma.career.createMany({
    data: [
      {
        title: "Business Analyst",
        industry: "Business / Tech",
        description:
          "Analyzes requirements, maps processes, and translates business needs into system improvements.",
      },
      {
        title: "Data Analyst",
        industry: "Analytics",
        description:
          "Uses SQL/Excel/Python to clean data, build dashboards, and generate insights for decisions.",
      },
      {
        title: "UX Designer",
        industry: "Product",
        description:
          "Designs user experiences through research, wireframes, prototypes, and usability testing.",
      },
      {
        title: "Product Manager",
        industry: "Product",
        description:
          "Owns product direction, prioritizes roadmap, and aligns teams to deliver user value.",
      },
    ],
  });
}

async function seedQuizTechCareerMatcher() {
  // Guard: if quiz exists, do nothing
  const existing = await prisma.quiz.findUnique({ where: { slug: quizSlug } });
  if (existing) return;

  // Create quiz
  const quiz = await prisma.quiz.create({
    data: {
      slug: quizSlug,
      title: "Tech Career Matcher (Buzzfeed-style) v1",
      description:
        "A multiple-choice quiz that maps preferences to tech job role clusters.",
      isActive: true,
      version: 1,
    },
  });

  // Sections + questions + options
  const sections = [
    {
      title: "Interest & Enjoyment",
      description: "What you naturally enjoy doing.",
      order: 1,
      questions: [
        {
          order: 1,
          prompt: "Which activity sounds most fun?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Solving logic puzzles or algorithm problems",
              scoring: [
                { tag: "SWE", weight: 2 },
                { tag: "AI", weight: 1 },
              ],
            },
            {
              order: 2,
              value: "B",
              label: "Designing beautiful interfaces",
              scoring: [
                { tag: "FE", weight: 2 },
                { tag: "PM", weight: 1 },
              ],
            },
            {
              order: 3,
              value: "C",
              label: "Making systems run fast and reliably",
              scoring: [
                { tag: "BE", weight: 2 },
                { tag: "SEC", weight: 1 },
              ],
            },
            {
              order: 4,
              value: "D",
              label: "Training models or analyzing data patterns",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Breaking systems to see how they fail",
              scoring: [
                { tag: "SEC", weight: 2 },
                { tag: "QA", weight: 1 },
              ],
            },
            {
              order: 6,
              value: "F",
              label: "Building game mechanics or physics",
              scoring: [
                { tag: "GAME", weight: 2 },
                { tag: "SWE", weight: 1 },
              ],
            },
          ],
        },
        {
          order: 2,
          prompt: "When working on a project, what excites you most?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Making the core logic work",
              scoring: [
                { tag: "SWE", weight: 2 },
                { tag: "BE", weight: 1 },
              ],
            },
            {
              order: 2,
              value: "B",
              label: "Making it look polished and smooth",
              scoring: [{ tag: "FE", weight: 3 }],
            },
            {
              order: 3,
              value: "C",
              label: "Optimizing performance and scalability",
              scoring: [
                { tag: "BE", weight: 2 },
                { tag: "SEC", weight: 1 },
              ],
            },
            {
              order: 4,
              value: "D",
              label: "Discovering insights from data",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Finding edge cases and bugs",
              scoring: [
                { tag: "QA", weight: 2 },
                { tag: "SEC", weight: 1 },
              ],
            },
            {
              order: 6,
              value: "F",
              label: "Creating interactive experiences",
              scoring: [
                { tag: "GAME", weight: 2 },
                { tag: "FE", weight: 1 },
              ],
            },
          ],
        },
        {
          order: 3,
          prompt: "Which frustration annoys you the most?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Code that feels messy or illogical",
              scoring: [{ tag: "SWE", weight: 3 }],
            },
            {
              order: 2,
              value: "B",
              label: "Ugly or clunky UI",
              scoring: [{ tag: "FE", weight: 3 }],
            },
            {
              order: 3,
              value: "C",
              label: "Slow or unstable servers",
              scoring: [{ tag: "BE", weight: 3 }],
            },
            {
              order: 4,
              value: "D",
              label: "Dirty or incomplete datasets",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Security vulnerabilities",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "Games that feel unresponsive",
              scoring: [{ tag: "GAME", weight: 3 }],
            },
          ],
        },
      ],
    },
    {
      title: "Thinking Style",
      description: "How you approach problems.",
      order: 2,
      questions: [
        {
          order: 1,
          prompt: "How do you usually approach problems?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Break into logical steps",
              scoring: [{ tag: "SWE", weight: 3 }],
            },
            {
              order: 2,
              value: "B",
              label: "Think about user experience first",
              scoring: [
                { tag: "FE", weight: 2 },
                { tag: "PM", weight: 1 },
              ],
            },
            {
              order: 3,
              value: "C",
              label: "Think about system architecture",
              scoring: [{ tag: "BE", weight: 3 }],
            },
            {
              order: 4,
              value: "D",
              label: "Look for patterns in data",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Think about attack surfaces and risks",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "Prototype quickly and iterate",
              scoring: [
                { tag: "GAME", weight: 2 },
                { tag: "FE", weight: 1 },
              ],
            },
          ],
        },
        {
          order: 2,
          prompt: "Which describes you best?",
          options: [
            {
              order: 1,
              value: "A",
              label: "“I like clean, elegant logic.”",
              scoring: [{ tag: "SWE", weight: 3 }],
            },
            {
              order: 2,
              value: "B",
              label: "“I care how users feel.”",
              scoring: [
                { tag: "FE", weight: 2 },
                { tag: "PM", weight: 1 },
              ],
            },
            {
              order: 3,
              value: "C",
              label: "“I think in systems and pipelines.”",
              scoring: [{ tag: "BE", weight: 3 }],
            },
            {
              order: 4,
              value: "D",
              label: "“I love statistics and models.”",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "“I naturally suspect vulnerabilities.”",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "“I enjoy interactive simulations.”",
              scoring: [{ tag: "GAME", weight: 3 }],
            },
          ],
        },
      ],
    },
    {
      title: "Background & Exposure",
      description: "Tools and coursework you’ve liked.",
      order: 3,
      questions: [
        {
          order: 1,
          prompt: "Which tools have you enjoyed most?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Python / C++ / Java",
              scoring: [{ tag: "SWE", weight: 3 }],
            },
            {
              order: 2,
              value: "B",
              label: "HTML / CSS / React",
              scoring: [{ tag: "FE", weight: 3 }],
            },
            {
              order: 3,
              value: "C",
              label: "Node.js / databases / APIs",
              scoring: [{ tag: "BE", weight: 3 }],
            },
            {
              order: 4,
              value: "D",
              label: "Pandas / NumPy / TensorFlow",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Kali Linux / Wireshark",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "Unity / Unreal",
              scoring: [{ tag: "GAME", weight: 3 }],
            },
            {
              order: 7,
              value: "G",
              label: "Selenium / Postman testing",
              scoring: [{ tag: "QA", weight: 3 }],
            },
          ],
        },
        {
          order: 2,
          prompt: "What kind of coursework did you enjoy most?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Algorithms / Data Structures",
              scoring: [{ tag: "SWE", weight: 3 }],
            },
            {
              order: 2,
              value: "B",
              label: "Web Design / UI",
              scoring: [{ tag: "FE", weight: 3 }],
            },
            {
              order: 3,
              value: "C",
              label: "Operating Systems / Networks",
              scoring: [
                { tag: "BE", weight: 2 },
                { tag: "SEC", weight: 1 },
              ],
            },
            {
              order: 4,
              value: "D",
              label: "Machine Learning / Statistics",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Ethical Hacking / Security",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "Game Development",
              scoring: [{ tag: "GAME", weight: 3 }],
            },
            {
              order: 7,
              value: "G",
              label: "Software Testing",
              scoring: [{ tag: "QA", weight: 3 }],
            },
          ],
        },
      ],
    },
    {
      title: "Work Preferences",
      description: "What you want day-to-day.",
      order: 4,
      questions: [
        {
          order: 1,
          prompt: "What kind of problems do you want to solve daily?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Complex logical challenges",
              scoring: [{ tag: "SWE", weight: 3 }],
            },
            {
              order: 2,
              value: "B",
              label: "User-facing features",
              scoring: [{ tag: "FE", weight: 3 }],
            },
            {
              order: 3,
              value: "C",
              label: "Infrastructure and scalability",
              scoring: [{ tag: "BE", weight: 3 }],
            },
            {
              order: 4,
              value: "D",
              label: "Prediction and data modeling",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Protecting systems from attackers",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "Gameplay systems",
              scoring: [{ tag: "GAME", weight: 3 }],
            },
            {
              order: 7,
              value: "G",
              label: "Ensuring product quality",
              scoring: [{ tag: "QA", weight: 3 }],
            },
          ],
        },
        {
          order: 2,
          prompt: "Preferred work environment?",
          options: [
            {
              order: 1,
              value: "A",
              label: "Deep focus coding",
              scoring: [
                { tag: "SWE", weight: 2 },
                { tag: "BE", weight: 1 },
              ],
            },
            {
              order: 2,
              value: "B",
              label: "Design + coding mix",
              scoring: [{ tag: "FE", weight: 3 }],
            },
            {
              order: 3,
              value: "C",
              label: "Distributed systems work",
              scoring: [{ tag: "BE", weight: 3 }],
            },
            {
              order: 4,
              value: "D",
              label: "Research-heavy work",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "Adversarial mindset work",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "Creative interactive work",
              scoring: [{ tag: "GAME", weight: 3 }],
            },
            {
              order: 7,
              value: "G",
              label: "Test planning and validation",
              scoring: [{ tag: "QA", weight: 3 }],
            },
            {
              order: 8,
              value: "H",
              label: "Coordinating teams and features",
              scoring: [{ tag: "PM", weight: 3 }],
            },
          ],
        },
      ],
    },
    {
      title: "Tie-Breaker",
      description: "Final nudge when results are close.",
      order: 5,
      questions: [
        {
          order: 1,
          prompt: "Which statement feels most like you?",
          options: [
            {
              order: 1,
              value: "A",
              label: "“I want to build powerful systems.”",
              scoring: [
                { tag: "BE", weight: 2 },
                { tag: "SWE", weight: 1 },
              ],
            },
            {
              order: 2,
              value: "B",
              label: "“I want to build things people love to use.”",
              scoring: [
                { tag: "FE", weight: 2 },
                { tag: "PM", weight: 1 },
              ],
            },
            {
              order: 3,
              value: "C",
              label: "“I want to understand intelligent behavior.”",
              scoring: [{ tag: "AI", weight: 3 }],
            },
            {
              order: 4,
              value: "D",
              label: "“I want to outsmart attackers.”",
              scoring: [{ tag: "SEC", weight: 3 }],
            },
            {
              order: 5,
              value: "E",
              label: "“I want to build immersive worlds.”",
              scoring: [{ tag: "GAME", weight: 3 }],
            },
            {
              order: 6,
              value: "F",
              label: "“I want to guarantee quality.”",
              scoring: [{ tag: "QA", weight: 3 }],
            },
          ],
        },
      ],
    },
  ] as const;

  for (const s of sections) {
    const section = await prisma.quizSection.create({
      data: {
        quizId: quiz.id,
        title: s.title,
        description: s.description,
        order: s.order,
      },
    });

    for (const q of s.questions) {
      const question = await prisma.quizQuestion.create({
        data: {
          quizId: quiz.id,
          sectionId: section.id,
          prompt: q.prompt,
          helperText: undefined,
          type: "SINGLE_CHOICE",
          order: q.order,
          isRequired: true,
        },
      });

      await prisma.quizOption.createMany({
        data: q.options.map((o) => ({
          questionId: question.id,
          label: o.label,
          value: o.value,
          order: o.order,
          scoring: scoringJson(o.scoring),
        })),
      });
    }
  }
}

async function main() {
  await seedCareers();
  await seedQuizTechCareerMatcher();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
