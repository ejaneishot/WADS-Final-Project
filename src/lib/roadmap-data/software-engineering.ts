import type { RoadmapTopic } from "../roadmaps";

export const softwareEngineering: RoadmapTopic[] = [
  {
    slug: "python-fundamentals",
    title: "Python Fundamentals",
    icon: "🐍",
    summary: "Variables, control flow, functions, and the building blocks every Python program is made of.",
    lessons: [
      {
        slug: "print-hello-world",
        title: "Print, Hello World",
        body: [
          "Every Python program can start with a single line. `print()` writes text to the screen, and strings are wrapped in quotes.",
        ],
        code: { lang: "python", content: `print("Hello, World!")` },
        challenge: {
          language: "python",
          prompt: "Use print() to output exactly: Hello, World!",
          starterCode: `# TODO: print "Hello, World!"\n`,
          expectedOutput: "Hello, World!",
          hint: 'print("Hello, World!")',
        },
      },
      {
        slug: "variables-and-fstrings",
        title: "Variables & f-strings",
        body: [
          "Variables store values with `=`. f-strings (`f\"...\"`) let you embed variables directly inside a string using curly braces.",
        ],
        code: { lang: "python", content: `name = "Ada"\nprint(f"Hello, {name}!")` },
        challenge: {
          language: "python",
          prompt: 'Create a variable `name` set to "Nova" and print "Hello, Nova!" using an f-string.',
          starterCode: `name = "Nova"\n# TODO: print a greeting using an f-string`,
          expectedOutput: "Hello, Nova!",
          hint: 'print(f"Hello, {name}!")',
        },
      },
      {
        slug: "functions-basics",
        title: "Functions",
        body: [
          "A function packages logic you can reuse. `def` defines it, and `return` sends a value back to whoever called it.",
        ],
        code: { lang: "python", content: `def add(a, b):\n    return a + b\n\nprint(add(2, 3))` },
        challenge: {
          language: "python",
          prompt: "Complete `add(a, b)` so it returns the sum of its arguments, then print add(2, 3).",
          starterCode: `def add(a, b):\n    # TODO: return a + b\n    pass\n\nprint(add(2, 3))`,
          expectedOutput: "5",
          hint: "return a + b",
        },
      },
    ],
  },
  {
    slug: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    icon: "🧱",
    summary: "How to organize data efficiently and reason about the speed of your code.",
    lessons: [
      {
        slug: "lists-basics",
        title: "Lists",
        body: [
          "A list stores an ordered collection of items, created with square brackets. `.append()` adds an item to the end.",
        ],
        code: { lang: "python", content: `nums = [1, 2, 3]\nnums.append(4)\nprint(nums)` },
        challenge: {
          language: "python",
          prompt: "Start with `nums = [1, 2, 3]`, append 4 to it, then print nums.",
          starterCode: `nums = [1, 2, 3]\n# TODO: append 4, then print nums`,
          expectedOutput: "[1, 2, 3, 4]",
          hint: "nums.append(4)",
        },
      },
      {
        slug: "loops-and-sums",
        title: "Loops",
        body: [
          "A `for` loop repeats code once per item in a sequence. Combine it with a running total to sum values one at a time.",
        ],
        code: { lang: "python", content: `total = 0\nfor n in [1, 2, 3, 4]:\n    total += n\nprint(total)` },
        challenge: {
          language: "python",
          prompt: "Sum the numbers in [10, 20, 30] using a for loop and print the result.",
          starterCode: `numbers = [10, 20, 30]\ntotal = 0\n# TODO: loop over numbers, adding each to total\nprint(total)`,
          expectedOutput: "60",
          hint: "total += n inside the loop",
        },
      },
      {
        slug: "binary-search",
        title: "Binary Search",
        body: [
          "Binary search finds a value in a sorted list by repeatedly halving the search range — O(log n) instead of checking every item.",
        ],
        code: {
          lang: "python",
          content:
`def binary_search(items, target):
    lo, hi = 0, len(items) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if items[mid] == target:
            return True
        elif items[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return False`,
        },
        challenge: {
          language: "python",
          prompt: "Implement `binary_search(items, target)` so it returns True if target exists in the sorted list, else False. Test it on [1, 3, 5, 7, 9, 11, 13] looking for 9.",
          starterCode:
`def binary_search(items, target):
    lo, hi = 0, len(items) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        # TODO: compare items[mid] to target and narrow the range
        pass
    return False

numbers = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(numbers, 9))`,
          expectedOutput: "True",
          hint: "If items[mid] == target return True. If items[mid] < target, set lo = mid + 1, else set hi = mid - 1.",
        },
      },
    ],
  },
  {
    slug: "git-version-control",
    title: "Git & Version Control",
    icon: "🔧",
    summary: "Tracking changes, collaborating without conflicts, and the daily Git workflow.",
    lessons: [
      {
        slug: "what-is-version-control",
        title: "What is Version Control",
        body: [
          "Version control tracks every change to your files over time, so you can review history, undo mistakes, and collaborate without overwriting each other's work. Git is the standard tool for this.",
        ],
        challenge: {
          language: "python",
          prompt: "The list `commits` holds commit messages in chronological order. Print the most recent (last) commit message.",
          starterCode: `commits = ["init", "add login", "fix bug"]\n# TODO: print the last commit message`,
          expectedOutput: "fix bug",
          hint: "commits[-1]",
        },
      },
      {
        slug: "staging-and-commits",
        title: "Staging & Commits",
        body: [
          "`git add` stages changes you want to include, and `git commit` saves a snapshot of the staged changes with a message describing what changed.",
        ],
        challenge: {
          language: "python",
          prompt: "The dict `staged` maps filenames to whether they're staged. Print how many files are currently staged.",
          starterCode: `staged = {"app.py": True, "readme.md": False, "utils.py": True}\n# TODO: print how many values in staged are True`,
          expectedOutput: "2",
          hint: "sum(staged.values())",
        },
      },
      {
        slug: "branching",
        title: "Branching",
        body: [
          "A branch is an independent line of development. `git checkout -b feature` creates and switches to a new branch so you can work without affecting `main`.",
        ],
        challenge: {
          language: "python",
          prompt: "The dict `branches` maps branch names to whether they're merged into main. Print a list of the branch names that are NOT yet merged.",
          starterCode: `branches = {"main": True, "feature-login": False, "feature-search": False}\n# TODO: print a list of branch names whose value is False`,
          expectedOutput: "['feature-login', 'feature-search']",
          hint: "[name for name, merged in branches.items() if not merged]",
        },
      },
    ],
  },
  {
    slug: "software-design-principles",
    title: "Software Design Principles",
    icon: "📐",
    summary: "Writing code that's easy to read, change, and extend.",
    lessons: [
      {
        slug: "dry-principle",
        title: "DRY — Don't Repeat Yourself",
        body: [
          "Duplicated logic means duplicated bugs — fix one copy and the others stay broken. Extracting repeated code into a function keeps things consistent.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `area(w, h)` so it returns width * height, then print area(3, 4) and area(5, 5) on separate lines.",
          starterCode: `def area(w, h):\n    # TODO: return w * h\n    pass\n\nprint(area(3, 4))\nprint(area(5, 5))`,
          expectedOutput: "12\n25",
          hint: "return w * h",
        },
      },
      {
        slug: "single-responsibility",
        title: "Single Responsibility",
        body: [
          "Each function should do one thing well. A function that calculates, prints, AND saves to a file is harder to test and reuse than three small functions.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `calculate_total(prices)` so it returns the sum of a list, then print the result for [10, 20, 30].",
          starterCode: `def calculate_total(prices):\n    # TODO: return the sum of prices\n    pass\n\nprint(calculate_total([10, 20, 30]))`,
          expectedOutput: "60",
          hint: "return sum(prices)",
        },
      },
      {
        slug: "naming-and-readability",
        title: "Naming & Readability",
        body: [
          "Code is read far more often than it's written. Clear names like `is_valid_email` instead of `chk` make code self-documenting.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `is_palindrome(word)` so it returns True if the word reads the same forwards and backwards. Test it on \"level\".",
          starterCode: `def is_palindrome(word):\n    # TODO: return True if word equals its reverse\n    pass\n\nprint(is_palindrome("level"))`,
          expectedOutput: "True",
          hint: "word == word[::-1]",
        },
      },
    ],
  },
];
