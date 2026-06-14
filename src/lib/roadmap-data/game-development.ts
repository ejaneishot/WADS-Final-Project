import type { RoadmapTopic } from "../roadmaps";

export const gameDevelopment: RoadmapTopic[] = [
  {
    slug: "game-dev-intro",
    title: "Intro to Game Development",
    icon: "🎮",
    summary: "The game loop, game state, and collision detection — concepts behind every game engine.",
    lessons: [
      {
        slug: "game-loop",
        title: "The Game Loop",
        body: [
          "Every game runs a loop: process input, update state, render. This repeats every frame, often 60 times per second.",
        ],
        challenge: {
          language: "python",
          prompt: "`frames` represents three steps repeated for several game ticks. Print how many total frame-steps there are.",
          starterCode: `frames = ["input", "update", "render"] * 3\n# TODO: print len(frames)`,
          expectedOutput: "9",
          hint: "len(frames)",
        },
      },
      {
        slug: "game-state",
        title: "Game State",
        body: [
          "Game state is the data describing the current situation — player health, score, position. Updating it each frame is how the game progresses.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `take_damage(state, amount)` so it returns a NEW dict with `health` reduced by amount, then print the updated health.",
          starterCode: `def take_damage(state, amount):\n    # TODO: return a new dict with health reduced by amount\n    pass\n\nstate = {"health": 100}\nnew_state = take_damage(state, 30)\nprint(new_state["health"])`,
          expectedOutput: "70",
          hint: 'return {**state, "health": state["health"] - amount}',
        },
      },
      {
        slug: "collision-detection",
        title: "Collision Detection",
        body: [
          "Collision detection checks whether two objects overlap — often using simple range/rectangle bounds checks.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `overlaps(a, b)` so it returns True if the 1D ranges (a[0], a[1]) and (b[0], b[1]) overlap. Test with (0, 5) and (3, 8).",
          starterCode: `def overlaps(a, b):\n    # TODO: return True if a and b overlap\n    pass\n\nprint(overlaps((0, 5), (3, 8)))`,
          expectedOutput: "True",
          hint: "a[0] <= b[1] and b[0] <= a[1]",
        },
      },
    ],
  },
  {
    slug: "pygame-fundamentals",
    title: "Pygame Fundamentals (Python)",
    icon: "🐍",
    summary: "Drawing, movement, and input handling in Python's most popular game library.",
    lessons: [
      {
        slug: "drawing-shapes",
        title: "Drawing Shapes",
        body: [
          "Pygame draws to a surface using coordinates. A rectangle is defined by (x, y, width, height).",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `rect_area(rect)` so it returns width * height given a tuple (x, y, w, h). Test it with (10, 20, 4, 5).",
          starterCode: `def rect_area(rect):\n    x, y, w, h = rect\n    # TODO: return w * h\n    pass\n\nprint(rect_area((10, 20, 4, 5)))`,
          expectedOutput: "20",
          hint: "return w * h",
        },
      },
      {
        slug: "sprite-movement",
        title: "Sprite Movement",
        body: [
          "A sprite moves by adding its velocity to its position each frame: `position += velocity`.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `move(pos, vel)` so it returns the new (x, y) position after adding vel to pos. Test it with pos=(0, 0), vel=(5, -3).",
          starterCode: `def move(pos, vel):\n    # TODO: return (pos[0] + vel[0], pos[1] + vel[1])\n    pass\n\nprint(move((0, 0), (5, -3)))`,
          expectedOutput: "(5, -3)",
          hint: "(pos[0] + vel[0], pos[1] + vel[1])",
        },
      },
      {
        slug: "event-handling",
        title: "Event Handling",
        body: [
          "Pygame's event loop reports user input as events — key presses, mouse clicks. Checking event types lets you respond to specific keys.",
        ],
        challenge: {
          language: "python",
          prompt: 'Given a list of keys pressed this frame, print whether "SPACE" was pressed.',
          starterCode: `keys_pressed = ["LEFT", "SPACE", "UP"]\n# TODO: print whether "SPACE" is in keys_pressed`,
          expectedOutput: "True",
          hint: '"SPACE" in keys_pressed',
        },
      },
    ],
  },
  {
    slug: "unity-csharp-basics",
    title: "Unity & C# Basics",
    icon: "🎯",
    summary: "Get productive with the industry-standard engine's scripting language.",
    lessons: [
      {
        slug: "print-hello-world",
        title: "Print, Hello World",
        body: [
          "Unity scripts are C# classes. `Console.WriteLine` prints output — useful for debugging logic before wiring it to GameObjects.",
        ],
        code: { lang: "csharp", content: `using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello, World!");\n    }\n}` },
        challenge: {
          language: "csharp",
          prompt: "Complete Main so it prints exactly: Hello, World!",
          starterCode: `using System;\n\nclass Program\n{\n    static void Main()\n    {\n        // TODO: print "Hello, World!"\n    }\n}`,
          expectedOutput: "Hello, World!",
          hint: 'Console.WriteLine("Hello, World!");',
        },
      },
      {
        slug: "variables-and-methods",
        title: "Variables & Methods",
        body: [
          "C# is statically typed like Java. A method has a return type, a name, and typed parameters.",
        ],
        challenge: {
          language: "csharp",
          prompt: "Complete `Add(a, b)` so it returns a + b, then print Add(2, 3).",
          starterCode: `using System;\n\nclass Program\n{\n    static int Add(int a, int b)\n    {\n        // TODO: return a + b\n        return 0;\n    }\n\n    static void Main()\n    {\n        Console.WriteLine(Add(2, 3));\n    }\n}`,
          expectedOutput: "5",
          hint: "return a + b;",
        },
      },
      {
        slug: "health-and-damage",
        title: "Health & Damage",
        body: [
          "Game logic often needs clamping — e.g. health can't go below 0. `Math.Max` is a quick way to enforce a floor.",
        ],
        challenge: {
          language: "csharp",
          prompt: "Complete `ApplyDamage` so it subtracts `damage` from `health` but never returns less than 0. Test it with health=30 and damage=45.",
          starterCode: `using System;\n\nclass Program\n{\n    static int ApplyDamage(int health, int damage)\n    {\n        // TODO: return health - damage, clamped to a minimum of 0\n        return health;\n    }\n\n    static void Main()\n    {\n        Console.WriteLine(ApplyDamage(30, 45));\n    }\n}`,
          expectedOutput: "0",
          hint: "Math.Max(0, health - damage)",
        },
      },
    ],
  },
  {
    slug: "game-design-principles",
    title: "Game Design Principles",
    icon: "🧠",
    summary: "What makes games fun — core loops, difficulty curves, and playtesting.",
    lessons: [
      {
        slug: "core-loops",
        title: "Core Loops",
        body: [
          "Every engaging game has a 'core loop' — the small cycle of actions the player repeats: explore → fight → loot → upgrade → explore again.",
        ],
        challenge: {
          language: "python",
          prompt: 'A list represents the core loop steps in order. Print the step that comes right after "fight".',
          starterCode: `loop = ["explore", "fight", "loot", "upgrade"]\n# TODO: print the step after "fight"`,
          expectedOutput: "loot",
          hint: 'loop[loop.index("fight") + 1]',
        },
      },
      {
        slug: "difficulty-curves",
        title: "Difficulty Curves",
        body: [
          "A good difficulty curve increases gradually, keeping players challenged but not overwhelmed.",
        ],
        challenge: {
          language: "python",
          prompt: "Given a list of level difficulties, print whether the list is non-decreasing (each level is at least as hard as the previous one).",
          starterCode: `difficulties = [1, 2, 2, 4, 5]\n# TODO: print whether the list is non-decreasing`,
          expectedOutput: "True",
          hint: "all(difficulties[i] <= difficulties[i+1] for i in range(len(difficulties)-1))",
        },
      },
      {
        slug: "playtesting-feedback",
        title: "Playtesting Feedback",
        body: [
          "Playtesting reveals confusing UI and balance issues. Tracking how many testers got stuck on each level highlights where to improve.",
        ],
        challenge: {
          language: "python",
          prompt: "Given a dict mapping level names to how many testers got stuck, print the name of the level with the most stuck testers.",
          starterCode: `stuck = {"level-1": 2, "level-2": 8, "level-3": 3}\n# TODO: print the key with the highest value`,
          expectedOutput: "level-2",
          hint: "max(stuck, key=stuck.get)",
        },
      },
    ],
  },
];
