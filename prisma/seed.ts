/**
 * Database seed for Career Compass (Prisma 7 + pg adapter).
 * Run via `npx prisma db seed` — configured in prisma.config.ts.
 *
 * Idempotent career upserts; quiz content is wiped and recreated each run
 * so prompt/scoring changes in this file always reach the database.
 * Also upserts a local admin account (admin@admin.com).
 */
import "dotenv/config";
import bcrypt from "bcryptjs";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "../src/generated/prisma";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const pool = new Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

type ScoringItem = { tag: string; weight: number };

/** Maps seed scoring arrays to Prisma JSON input (omits empty weights). */
function scoringJson(
  scoring?: ScoringItem[],
): Prisma.InputJsonValue | undefined {
  if (!scoring || scoring.length === 0) return undefined;
  return scoring as unknown as Prisma.InputJsonValue;
}

/** Upserts career catalog from slug; removes careers no longer in the list. */
async function seedCareers() {
  const careersData = [
    {
      slug: "software-engineering",
      tag: "SWE",
      title: "Software Engineering",
      industry: "Technology",
      description: "Build scalable systems, APIs, and full-stack applications.",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "rgba(59,130,246,0.2)",
      milestones: [
        "FizzBuzz — divisibility and string output",
        "Two Sum — hash map for index lookup",
        "Valid Parentheses — stack-based bracket matching",
        "Fibonacci — iterative sequence generation",
        "Reverse a String — manual loop reversal",
        "Find Maximum — linear scan without Math.max",
        "Count Occurrences — character frequency map",
        "Is Palindrome — two-pointer with cleanup",
        "Flatten Array — one-level array spreading",
        "Binary Search — O(log n) sorted array search",
      ],
    },
    {
      slug: "frontend-engineering",
      tag: "FE",
      title: "Frontend Engineering",
      industry: "Technology",
      description:
        "Ship fast, accessible interfaces with modern web frameworks and design systems.",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      gradient: "from-pink-500/20 to-rose-500/20",
      border: "rgba(236,72,153,0.2)",
      milestones: [
        "Debounce — delay and reset on repeated calls",
        "Deep Clone — recursive object/array copying",
        "Event Emitter — on / emit / off pattern",
        "Throttle — limit calls to once per interval",
        "Flatten Object — dot-notation nested keys",
        "Memoize — cache results by stringified args",
        "Array Difference — filter elements not in B",
        "CSS Class Toggle — add/remove without classList",
        "Parse Query String — URL params to object",
        "Group By — bucket objects by a key",
      ],
    },
    {
      slug: "backend-engineering",
      tag: "BE",
      title: "Backend Engineering",
      industry: "Technology",
      description:
        "Design reliable APIs, data layers, and services that power products at scale.",
      icon: "⚙️",
      color: "from-gray-600 to-gray-900",
      gradient: "from-gray-600/20 to-gray-900/20",
      border: "rgba(75,85,99,0.25)",
      milestones: [
        "Rate Limiter — per-user request window tracking",
        "LRU Cache — Map-based eviction by recency",
        "Deep Equal — recursive JSON structure compare",
        "Retry with Backoff — exponential delay on failure",
        "Middleware Pipeline — left-to-right fn composition",
        "Chunk Array — split into fixed-size slices",
        "URL Builder — sorted query string construction",
        "Token Bucket — capacity and refill rate control",
        "Serialize / Deserialize — JSON round-trip with error handling",
        "Unique By Key — deduplicate objects on a field",
      ],
    },
    {
      slug: "cybersecurity",
      tag: "SEC",
      title: "Cybersecurity",
      industry: "Technology",
      description: "Protect systems, networks, and data from digital threats.",
      icon: "🔐",
      color: "from-red-500 to-orange-500",
      gradient: "from-red-500/20 to-orange-500/20",
      border: "rgba(239,68,68,0.2)",
      milestones: [
        "Caesar Cipher — shift letters with wrap-around",
        "XOR Encryption — bitwise char encoding with key cycling",
        "Password Strength — length and character class rules",
        "Sanitize HTML — encode special chars to prevent XSS",
        "djb2 Hash — multiply-XOR non-cryptographic hash",
        "Generate OTP — fixed-length random digit string",
        "JWT Header Decode — Base64URL decode and JSON parse",
        "Validate Email — regex structure check",
        "Constant Time Compare — XOR-based timing-safe equality",
        "Parse Cookie Header — semicolon-delimited key-value pairs",
      ],
    },
    {
      slug: "artificial-intelligence",
      tag: "AI",
      title: "Artificial Intelligence",
      industry: "Technology",
      description: "Design intelligent systems, LLMs, and autonomous agents.",
      icon: "🤖",
      color: "from-emerald-400 to-teal-500",
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "rgba(110,231,183,0.2)",
      milestones: [
        "Dot Product — element-wise multiply and sum",
        "Sigmoid — squash any value to 0–1",
        "Softmax — convert logits to probability distribution",
        "Euclidean Distance — straight-line distance in n dimensions",
        "Cosine Similarity — angle-based vector similarity",
        "Normalize Vector — scale to unit length",
        "K-Nearest Neighbors — classify by closest training points",
        "Mean Squared Error — average squared prediction error",
        "Tokenize Text — lowercase, strip punctuation, split words",
        "Gradient Descent Step — update weights by learning rate × gradient",
      ],
    },
    {
      slug: "game-development",
      tag: "GAME",
      title: "Game Development",
      industry: "Technology",
      description:
        "Build gameplay systems, engines, and interactive experiences players love.",
      icon: "🎮",
      color: "from-fuchsia-600 to-indigo-600",
      gradient: "from-fuchsia-600/20 to-indigo-600/20",
      border: "rgba(192,38,211,0.22)",
      milestones: [
        "Clamp — constrain a value within min/max bounds",
        "AABB Collision — axis-aligned bounding box overlap test",
        "Lerp — smooth linear interpolation between two values",
        "Random Integer in Range — inclusive random int generation",
        "BFS Shortest Path — grid pathfinding with queue",
        "State Machine — transition table with dispatch",
        "Fisher-Yates Shuffle — in-place unbiased array shuffle",
        "Distance Between Points — 2D Euclidean distance",
        "Tile Map Lookup — world position to grid cell",
        "Angle Between Vectors — dot product to degrees",
      ],
    },
  ];

  for (const career of careersData) {
    await prisma.career.upsert({
      where: { slug: career.slug },
      create: career,
      update: {
        tag: career.tag,
        title: career.title,
        industry: career.industry,
        description: career.description,
        icon: career.icon,
        color: career.color,
        gradient: career.gradient,
        border: career.border,
        milestones: career.milestones,
      },
    });
  }

  const allowedSlugs = careersData.map((c) => c.slug);
  await prisma.career.deleteMany({
    where: { slug: { notIn: allowedSlugs } },
  });
}

/** Rebuilds the single built-in career matcher quiz (sections → questions → options). */
async function seedQuizTechCareerMatcher() {
  await prisma.$transaction(async (tx) => {
    await tx.assessmentAnswer.deleteMany();
    await tx.assessmentAttempt.deleteMany();
    await tx.quizOption.deleteMany();
    await tx.quizQuestion.deleteMany();
    await tx.quizSection.deleteMany();
  });

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
              scoring: [{ tag: "FE", weight: 3 }],
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
              scoring: [{ tag: "SEC", weight: 3 }],
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
              scoring: [{ tag: "SEC", weight: 3 }],
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
              scoring: [{ tag: "FE", weight: 3 }],
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
              scoring: [{ tag: "FE", weight: 3 }],
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
              scoring: [{ tag: "FE", weight: 3 }],
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
          ],
        },
      ],
    },
  ] as const;

  for (const s of sections) {
    const section = await prisma.quizSection.create({
      data: {
        title: s.title,
        description: s.description,
        order: s.order,
      },
    });

    for (const q of s.questions) {
      const question = await prisma.quizQuestion.create({
        data: {
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

/** Local admin account (bcrypt cost 10, same as hashPassword in auth.ts). */
async function seedAdminUser() {
  const email = "admin@admin.com";
  const passwordHash = await bcrypt.hash("1324513245", 10);

  await prisma.user.upsert({
    where: { email },
    create: { email, passwordHash, role: "admin" },
    update: { passwordHash, role: "admin" },
  });
}

async function main() {
  await seedCareers();
  await seedQuizTechCareerMatcher();
  await seedAdminUser();
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
