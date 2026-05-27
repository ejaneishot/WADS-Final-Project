// src/lib/quiz-data.ts
// Coding quiz questions for each specialization track.
// Each question has: a prompt, starter code, test cases (input→expected output),
// and a solution hint. The runner checks that the user's function produces
// the expected output for every test case.

export type TestCase = {
  args: unknown[];
  expected: unknown;
  label: string;
};

export type QuizQuestion = {
  id: number;
  title: string;
  prompt: string;          // The full problem description shown to the user
  starterCode: string;     // Pre-filled code skeleton
  functionName: string;    // The function the user must implement
  testCases: TestCase[];
  hint?: string;
};

export type TrackQuiz = {
  slug: string;
  tag: string;
  title: string;
  icon: string;
  color: string;
  questions: QuizQuestion[];
};

// ─────────────────────────────────────────────────────────────────────────────
// SOFTWARE ENGINEERING
// ─────────────────────────────────────────────────────────────────────────────
const sweQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "FizzBuzz",
    prompt: `Implement the classic FizzBuzz function.

Given a positive integer \`n\`, return a string:
- "FizzBuzz" if n is divisible by both 3 and 5
- "Fizz" if n is divisible by 3
- "Buzz" if n is divisible by 5
- The number as a string otherwise`,
    starterCode: `function fizzBuzz(n) {
  // Your code here
}`,
    functionName: "fizzBuzz",
    testCases: [
      { args: [15], expected: "FizzBuzz", label: "fizzBuzz(15)" },
      { args: [9], expected: "Fizz", label: "fizzBuzz(9)" },
      { args: [10], expected: "Buzz", label: "fizzBuzz(10)" },
      { args: [7], expected: "7", label: "fizzBuzz(7)" },
    ],
    hint: "Check divisibility with the % operator. Order matters — check 15 first.",
  },
  {
    id: 2,
    title: "Two Sum",
    prompt: `Given an array of integers \`nums\` and an integer \`target\`, return the indices of the two numbers that add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice. Return the indices as an array \`[i, j]\` where \`i < j\`.`,
    starterCode: `function twoSum(nums, target) {
  // Your code here
}`,
    functionName: "twoSum",
    testCases: [
      { args: [[2, 7, 11, 15], 9], expected: [0, 1], label: "twoSum([2,7,11,15], 9)" },
      { args: [[3, 2, 4], 6], expected: [1, 2], label: "twoSum([3,2,4], 6)" },
      { args: [[1, 5, 3, 7], 8], expected: [1, 2], label: "twoSum([1,5,3,7], 8)" },
    ],
    hint: "Use a hash map to store each number and its index as you iterate.",
  },
  {
    id: 3,
    title: "Valid Parentheses",
    prompt: `Given a string \`s\` containing only '(', ')', '{', '}', '[', ']', determine if the input string is valid.

A string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket.`,
    starterCode: `function isValid(s) {
  // Your code here
}`,
    functionName: "isValid",
    testCases: [
      { args: ["()[]{}"], expected: true, label: 'isValid("()[]{}")' },
      { args: ["(]"], expected: false, label: 'isValid("(]")' },
      { args: ["({[]})"], expected: true, label: 'isValid("({[]})")' },
      { args: [")"], expected: false, label: 'isValid(")")' },
    ],
    hint: "Use a stack. Push open brackets, pop and match when you see a closing bracket.",
  },
  {
    id: 4,
    title: "Fibonacci",
    prompt: `Implement a function that returns the \`n\`-th Fibonacci number (0-indexed).

The Fibonacci sequence starts: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

- fib(0) = 0
- fib(1) = 1
- fib(n) = fib(n-1) + fib(n-2)`,
    starterCode: `function fib(n) {
  // Your code here
}`,
    functionName: "fib",
    testCases: [
      { args: [0], expected: 0, label: "fib(0)" },
      { args: [6], expected: 8, label: "fib(6)" },
      { args: [10], expected: 55, label: "fib(10)" },
    ],
    hint: "An iterative solution with two variables is most efficient.",
  },
  {
    id: 5,
    title: "Reverse a String",
    prompt: `Write a function that reverses a string. Return the reversed string.

Do not use the built-in \`.reverse()\` array method or \`.split().reverse().join()\` shortcut — implement it manually using a loop.`,
    starterCode: `function reverseString(s) {
  // Your code here
}`,
    functionName: "reverseString",
    testCases: [
      { args: ["hello"], expected: "olleh", label: 'reverseString("hello")' },
      { args: ["abcde"], expected: "edcba", label: 'reverseString("abcde")' },
      { args: ["racecar"], expected: "racecar", label: 'reverseString("racecar")' },
    ],
    hint: "Use a for loop starting from the end of the string, building a new string.",
  },
  {
    id: 6,
    title: "Find Maximum",
    prompt: `Given an unsorted array of numbers, return the maximum value without using \`Math.max()\` or \`.sort()\`.

Implement it manually by iterating through the array.`,
    starterCode: `function findMax(arr) {
  // Your code here
}`,
    functionName: "findMax",
    testCases: [
      { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: 9, label: "findMax([3,1,4,1,5,9,2,6])" },
      { args: [[-5, -1, -3]], expected: -1, label: "findMax([-5,-1,-3])" },
      { args: [[42]], expected: 42, label: "findMax([42])" },
    ],
    hint: "Initialize a variable with the first element, then update it whenever you find a larger value.",
  },
  {
    id: 7,
    title: "Count Occurrences",
    prompt: `Given a string \`s\`, return an object (map) where each key is a character and the value is the number of times it appears in the string.

Example: countChars("hello") → { h: 1, e: 1, l: 2, o: 1 }`,
    starterCode: `function countChars(s) {
  // Your code here
}`,
    functionName: "countChars",
    testCases: [
      { args: ["hello"], expected: { h: 1, e: 1, l: 2, o: 1 }, label: 'countChars("hello")' },
      { args: ["aab"], expected: { a: 2, b: 1 }, label: 'countChars("aab")' },
      { args: ["z"], expected: { z: 1 }, label: 'countChars("z")' },
    ],
    hint: "Iterate over each character and use an object as a frequency counter.",
  },
  {
    id: 8,
    title: "Is Palindrome",
    prompt: `Write a function that checks if a string is a palindrome (reads the same forwards and backwards).

Ignore case and non-alphanumeric characters.

Example: isPalindrome("A man a plan a canal Panama") → true`,
    starterCode: `function isPalindrome(s) {
  // Your code here
}`,
    functionName: "isPalindrome",
    testCases: [
      { args: ["racecar"], expected: true, label: 'isPalindrome("racecar")' },
      { args: ["hello"], expected: false, label: 'isPalindrome("hello")' },
      { args: ["A man a plan a canal Panama"], expected: true, label: 'isPalindrome("A man...")' },
    ],
    hint: "Clean the string first (lowercase, remove non-alphanumeric), then use two pointers.",
  },
  {
    id: 9,
    title: "Flatten Array",
    prompt: `Write a function that flattens a nested array one level deep.

Example: flattenOne([1, [2, 3], [4, [5]]]) → [1, 2, 3, 4, [5]]

Only flatten one level — nested arrays inside already-nested arrays stay as-is.`,
    starterCode: `function flattenOne(arr) {
  // Your code here
}`,
    functionName: "flattenOne",
    testCases: [
      { args: [[1, [2, 3], [4, [5]]]], expected: [1, 2, 3, 4, [5]], label: "flattenOne([1,[2,3],[4,[5]]])" },
      { args: [[[], [1], [2, 3]]], expected: [1, 2, 3], label: "flattenOne([[],[1],[2,3]])" },
      { args: [[1, 2, 3]], expected: [1, 2, 3], label: "flattenOne([1,2,3])" },
    ],
    hint: "Use Array.prototype.concat or a forEach loop to spread each sub-array into the result.",
  },
  {
    id: 10,
    title: "Binary Search",
    prompt: `Implement binary search on a sorted array.

Given a sorted array \`arr\` and a target value, return the index of the target. If the target is not found, return -1.

You must achieve O(log n) time complexity.`,
    starterCode: `function binarySearch(arr, target) {
  // Your code here
}`,
    functionName: "binarySearch",
    testCases: [
      { args: [[1, 3, 5, 7, 9], 5], expected: 2, label: "binarySearch([1,3,5,7,9], 5)" },
      { args: [[1, 3, 5, 7, 9], 6], expected: -1, label: "binarySearch([1,3,5,7,9], 6)" },
      { args: [[2, 4, 6, 8, 10], 10], expected: 4, label: "binarySearch([2,4,6,8,10], 10)" },
    ],
    hint: "Use left/right pointers. Compute mid = Math.floor((left+right)/2) and narrow the range.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FRONTEND ENGINEERING
// ─────────────────────────────────────────────────────────────────────────────
const feQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "DOM Query Selector",
    prompt: `Write a function \`getFirstMatch\` that takes a CSS selector string and returns the text content of the first matching element on the page.

If no element matches, return null.

Example: getFirstMatch("h1") → "Hello World"`,
    starterCode: `function getFirstMatch(selector) {
  // Your code here
}`,
    functionName: "getFirstMatch",
    testCases: [
      { args: ["body"], expected: document?.body?.textContent?.trim().slice(0, 4) ?? "body", label: "getFirstMatch('body') returns text" },
    ],
    hint: "Use document.querySelector(selector) and access .textContent.",
  },
  {
    id: 1,
    title: "Debounce",
    prompt: `Implement a \`debounce\` function.

\`debounce(fn, delay)\` should return a new function that, when called, waits \`delay\` milliseconds before calling \`fn\`. If the returned function is called again before the delay expires, the timer resets.

This is commonly used for search-as-you-type inputs to avoid excessive API calls.`,
    starterCode: `function debounce(fn, delay) {
  // Your code here
}`,
    functionName: "debounce",
    testCases: [
      {
        args: [],
        expected: "function",
        label: "debounce returns a function",
      },
    ],
    hint: "Use a closure with a timer variable. Call clearTimeout on each invocation, then setTimeout.",
  },
  {
    id: 2,
    title: "Deep Clone",
    prompt: `Implement a \`deepClone\` function that creates a deep copy of a plain JavaScript object or array.

Modifying the clone should not affect the original.

Only handle plain objects, arrays, strings, numbers, booleans, and null.`,
    starterCode: `function deepClone(value) {
  // Your code here
}`,
    functionName: "deepClone",
    testCases: [
      { args: [{ a: 1, b: { c: 2 } }], expected: { a: 1, b: { c: 2 } }, label: "deepClone({ a:1, b:{c:2} })" },
      { args: [[1, [2, 3]]], expected: [1, [2, 3]], label: "deepClone([1,[2,3]])" },
      { args: [42], expected: 42, label: "deepClone(42)" },
    ],
    hint: "Check the type: if array, map recursively; if object, create new object and recurse on each key; otherwise return as-is.",
  },
  {
    id: 3,
    title: "Event Emitter",
    prompt: `Implement a simple \`EventEmitter\` class with \`on\`, \`emit\`, and \`off\` methods.

- \`on(event, listener)\`: register a listener for an event
- \`emit(event, ...args)\`: call all listeners for an event with the given args
- \`off(event, listener)\`: remove a specific listener

Return a new instance that works correctly.`,
    starterCode: `class EventEmitter {
  // Your code here
}`,
    functionName: "EventEmitter",
    testCases: [
      { args: [], expected: "class", label: "EventEmitter is a class" },
    ],
    hint: "Store listeners in a Map or plain object. on() pushes to an array, off() splices it, emit() iterates.",
  },
  {
    id: 4,
    title: "Throttle",
    prompt: `Implement a \`throttle\` function.

\`throttle(fn, limit)\` returns a new function. When the new function is called repeatedly, it will only invoke \`fn\` at most once per \`limit\` milliseconds.

This is commonly used to limit scroll or resize event handlers.`,
    starterCode: `function throttle(fn, limit) {
  // Your code here
}`,
    functionName: "throttle",
    testCases: [
      { args: [], expected: "function", label: "throttle returns a function" },
    ],
    hint: "Track a 'lastRun' timestamp. On each call, only invoke fn if Date.now() - lastRun >= limit.",
  },
  {
    id: 5,
    title: "Flatten Object",
    prompt: `Given a nested object, return a flat object where nested keys are represented using dot notation.

Example:
flattenObject({ a: { b: { c: 1 } }, d: 2 })
→ { "a.b.c": 1, "d": 2 }`,
    starterCode: `function flattenObject(obj, prefix = "") {
  // Your code here
}`,
    functionName: "flattenObject",
    testCases: [
      { args: [{ a: { b: 1 }, c: 2 }], expected: { "a.b": 1, c: 2 }, label: 'flattenObject({a:{b:1},c:2})' },
      { args: [{ x: { y: { z: 3 } } }], expected: { "x.y.z": 3 }, label: 'flattenObject({x:{y:{z:3}}})' },
      { args: [{ a: 1 }], expected: { a: 1 }, label: 'flattenObject({a:1})' },
    ],
    hint: "Recurse into each value. If it's an object, recurse with the accumulated prefix. Otherwise, set prefix+key in the result.",
  },
  {
    id: 6,
    title: "Memoize",
    prompt: `Implement a \`memoize\` function that caches the results of a function call.

When the memoized function is called with the same arguments, it should return the cached result instead of re-computing.

Assume arguments are JSON-serializable.`,
    starterCode: `function memoize(fn) {
  // Your code here
}`,
    functionName: "memoize",
    testCases: [
      { args: [], expected: "function", label: "memoize returns a function" },
    ],
    hint: "Use a Map as the cache. Create a cache key by JSON.stringify(args). Check the cache before calling fn.",
  },
  {
    id: 7,
    title: "Array Difference",
    prompt: `Write a function \`arrayDiff(a, b)\` that returns elements in array \`a\` that are NOT present in array \`b\`.

Example: arrayDiff([1,2,3,4], [2,4]) → [1,3]`,
    starterCode: `function arrayDiff(a, b) {
  // Your code here
}`,
    functionName: "arrayDiff",
    testCases: [
      { args: [[1, 2, 3, 4], [2, 4]], expected: [1, 3], label: "arrayDiff([1,2,3,4],[2,4])" },
      { args: [[5, 6, 7], [5]], expected: [6, 7], label: "arrayDiff([5,6,7],[5])" },
      { args: [[1, 2], [3, 4]], expected: [1, 2], label: "arrayDiff([1,2],[3,4])" },
    ],
    hint: "Use .filter() on a and check with .includes() or a Set for O(1) lookups.",
  },
  {
    id: 8,
    title: "CSS Class Toggle",
    prompt: `Implement a function \`toggleClass(element, className)\` that:
- Adds the class if the element does not have it
- Removes the class if the element already has it

Work with the element's \`className\` string directly (do not use classList).

Return the updated className string.`,
    starterCode: `function toggleClass(element, className) {
  // element is an object with a .className string property
  // Your code here
}`,
    functionName: "toggleClass",
    testCases: [
      { args: [{ className: "btn" }, "active"], expected: "btn active", label: 'toggleClass({className:"btn"}, "active")' },
      { args: [{ className: "btn active" }, "active"], expected: "btn", label: 'toggleClass({className:"btn active"}, "active")' },
      { args: [{ className: "" }, "visible"], expected: "visible", label: 'toggleClass({className:""}, "visible")' },
    ],
    hint: "Split className by spaces into an array. Check if the class exists to decide add or remove, then join back.",
  },
  {
    id: 9,
    title: "Parse Query String",
    prompt: `Write a function \`parseQuery(queryString)\` that parses a URL query string into an object.

Example: parseQuery("name=Alice&age=30&city=Jakarta") → { name: "Alice", age: "30", city: "Jakarta" }

Handle the leading '?' if present.`,
    starterCode: `function parseQuery(queryString) {
  // Your code here
}`,
    functionName: "parseQuery",
    testCases: [
      { args: ["name=Alice&age=30"], expected: { name: "Alice", age: "30" }, label: 'parseQuery("name=Alice&age=30")' },
      { args: ["?x=1&y=2"], expected: { x: "1", y: "2" }, label: 'parseQuery("?x=1&y=2")' },
      { args: ["a=b"], expected: { a: "b" }, label: 'parseQuery("a=b")' },
    ],
    hint: "Strip the leading '?', split by '&', then split each pair by '=' to build the object.",
  },
  {
    id: 10,
    title: "Group By",
    prompt: `Implement \`groupBy(arr, key)\` that groups an array of objects by a given key.

Example:
groupBy([{type:"fruit",name:"apple"},{type:"veggie",name:"carrot"},{type:"fruit",name:"banana"}], "type")
→ { fruit: [{...}, {...}], veggie: [{...}] }`,
    starterCode: `function groupBy(arr, key) {
  // Your code here
}`,
    functionName: "groupBy",
    testCases: [
      {
        args: [[{ t: "a", v: 1 }, { t: "b", v: 2 }, { t: "a", v: 3 }], "t"],
        expected: { a: [{ t: "a", v: 1 }, { t: "a", v: 3 }], b: [{ t: "b", v: 2 }] },
        label: 'groupBy(arr, "t")',
      },
      {
        args: [[{ n: "x" }, { n: "x" }], "n"],
        expected: { x: [{ n: "x" }, { n: "x" }] },
        label: 'groupBy(arr, "n")',
      },
    ],
    hint: "Reduce the array. For each item, check if the group exists; if not, initialize it as []. Then push the item.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// BACKEND ENGINEERING
// ─────────────────────────────────────────────────────────────────────────────
const beQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Rate Limiter",
    prompt: `Implement a simple in-memory rate limiter function \`createRateLimiter(limit, windowMs)\`.

It should return a function \`check(userId)\` that returns \`true\` if the user is within the rate limit, or \`false\` if they have exceeded it.

Each user can make at most \`limit\` requests per \`windowMs\` milliseconds.`,
    starterCode: `function createRateLimiter(limit, windowMs) {
  // Your code here
  return function check(userId) {
    // Your code here
  };
}`,
    functionName: "createRateLimiter",
    testCases: [
      { args: [3, 1000], expected: "function", label: "createRateLimiter returns a function" },
    ],
    hint: "Use a Map where keys are userIds and values are arrays of request timestamps. Filter out old timestamps on each check.",
  },
  {
    id: 2,
    title: "LRU Cache",
    prompt: `Implement an LRU (Least Recently Used) Cache class with:
- \`constructor(capacity)\`: max number of items
- \`get(key)\`: return value or -1 if not found; marks as recently used
- \`put(key, value)\`: insert or update; evict the LRU item if over capacity`,
    starterCode: `class LRUCache {
  constructor(capacity) {
    // Your code here
  }
  get(key) {
    // Your code here
  }
  put(key, value) {
    // Your code here
  }
}`,
    functionName: "LRUCache",
    testCases: [
      { args: [], expected: "class", label: "LRUCache is a class" },
    ],
    hint: "Use a Map — it preserves insertion order. On get, delete and re-insert to move to end. On put when over capacity, delete the first key.",
  },
  {
    id: 3,
    title: "Deep Equal",
    prompt: `Implement \`deepEqual(a, b)\` that returns \`true\` if two values are deeply equal.

Two objects are deeply equal if they have the same keys and all values are recursively deeply equal.

Works for objects, arrays, and primitives.`,
    starterCode: `function deepEqual(a, b) {
  // Your code here
}`,
    functionName: "deepEqual",
    testCases: [
      { args: [{ x: 1, y: [2, 3] }, { x: 1, y: [2, 3] }], expected: true, label: "deepEqual objects" },
      { args: [{ x: 1 }, { x: 2 }], expected: false, label: "deepEqual different values" },
      { args: [[1, 2], [1, 2]], expected: true, label: "deepEqual arrays" },
      { args: [null, null], expected: true, label: "deepEqual null" },
    ],
    hint: "Check types first. For objects/arrays, compare keys and recurse. Handle null separately (typeof null === 'object').",
  },
  {
    id: 4,
    title: "Retry with Backoff",
    prompt: `Implement \`retry(fn, retries, delayMs)\` that calls an async function \`fn\` and retries up to \`retries\` times if it throws, waiting \`delayMs\` milliseconds between attempts (doubling each time — exponential backoff).

If all attempts fail, reject with the last error.`,
    starterCode: `async function retry(fn, retries, delayMs) {
  // Your code here
}`,
    functionName: "retry",
    testCases: [
      { args: [], expected: "async", label: "retry is an async function" },
    ],
    hint: "Use a loop. In the catch block, if retries > 0, await a delay then decrement retries and double delayMs. Otherwise rethrow.",
  },
  {
    id: 5,
    title: "Middleware Pipeline",
    prompt: `Implement a \`pipeline(...fns)\` function that composes multiple functions left-to-right.

Each function receives the output of the previous one.

Example: pipeline(x => x+1, x => x*2)(3) → (3+1)*2 = 8`,
    starterCode: `function pipeline(...fns) {
  // Your code here
}`,
    functionName: "pipeline",
    testCases: [
      { args: [], expected: "function", label: "pipeline returns a function" },
    ],
    hint: "Return a function that uses reduce to pass the accumulator through each fn left to right.",
  },
  {
    id: 6,
    title: "Chunk Array",
    prompt: `Write a function \`chunk(arr, size)\` that splits an array into chunks of the given size.

The last chunk may be smaller if the array length is not evenly divisible.

Example: chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]`,
    starterCode: `function chunk(arr, size) {
  // Your code here
}`,
    functionName: "chunk",
    testCases: [
      { args: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]], label: "chunk([1..5], 2)" },
      { args: [[1, 2, 3], 3], expected: [[1, 2, 3]], label: "chunk([1,2,3], 3)" },
      { args: [[1, 2, 3, 4], 1], expected: [[1], [2], [3], [4]], label: "chunk([1..4], 1)" },
    ],
    hint: "Use a for loop stepping by `size`. Each iteration, push arr.slice(i, i+size) to the result.",
  },
  {
    id: 7,
    title: "URL Builder",
    prompt: `Implement \`buildUrl(base, params)\` that appends query parameters to a base URL.

Example: buildUrl("https://api.example.com/users", { page: 1, limit: 10 })
→ "https://api.example.com/users?page=1&limit=10"

Sort the keys alphabetically for consistent output.`,
    starterCode: `function buildUrl(base, params) {
  // Your code here
}`,
    functionName: "buildUrl",
    testCases: [
      { args: ["https://example.com", { b: 2, a: 1 }], expected: "https://example.com?a=1&b=2", label: "buildUrl sorts params" },
      { args: ["https://example.com/x", {}], expected: "https://example.com/x", label: "buildUrl empty params" },
      { args: ["https://api.test", { q: "hello" }], expected: "https://api.test?q=hello", label: "buildUrl single param" },
    ],
    hint: "Sort the keys, map to 'key=value' pairs, join with '&', and prepend '?' if there are any params.",
  },
  {
    id: 8,
    title: "Token Bucket",
    prompt: `Implement a \`createTokenBucket(capacity, refillRate)\` function.

Returns an object with:
- \`consume(tokens)\`: returns true if enough tokens available and subtracts them; false otherwise
- \`refill()\`: adds \`refillRate\` tokens up to \`capacity\``,
    starterCode: `function createTokenBucket(capacity, refillRate) {
  // Your code here
  return {
    consume(tokens) {
      // Your code here
    },
    refill() {
      // Your code here
    }
  };
}`,
    functionName: "createTokenBucket",
    testCases: [
      { args: [10, 2], expected: "object", label: "createTokenBucket returns object" },
    ],
    hint: "Track current tokens in closure. consume() checks and decrements. refill() adds refillRate but caps at capacity.",
  },
  {
    id: 9,
    title: "Serialize/Deserialize",
    prompt: `Implement \`serialize(obj)\` and \`deserialize(str)\` functions.

\`serialize\` converts a plain object to a JSON string.
\`deserialize\` parses a JSON string back to an object.

Handle nested structures. Wrap in try/catch for deserialize — return null on parse error.`,
    starterCode: `function serialize(obj) {
  // Your code here
}

function deserialize(str) {
  // Your code here
}`,
    functionName: "serialize",
    testCases: [
      { args: [{ a: 1, b: [2, 3] }], expected: '{"a":1,"b":[2,3]}', label: 'serialize({a:1,b:[2,3]})' },
      { args: [{ name: "test" }], expected: '{"name":"test"}', label: 'serialize({name:"test"})' },
    ],
    hint: "Use JSON.stringify for serialize and JSON.parse in a try/catch for deserialize.",
  },
  {
    id: 10,
    title: "Unique by Key",
    prompt: `Implement \`uniqueBy(arr, key)\` that removes duplicate objects from an array based on a given key, keeping the first occurrence.

Example: uniqueBy([{id:1,v:"a"},{id:2,v:"b"},{id:1,v:"c"}], "id")
→ [{id:1,v:"a"},{id:2,v:"b"}]`,
    starterCode: `function uniqueBy(arr, key) {
  // Your code here
}`,
    functionName: "uniqueBy",
    testCases: [
      { args: [[{ id: 1, v: "a" }, { id: 2, v: "b" }, { id: 1, v: "c" }], "id"], expected: [{ id: 1, v: "a" }, { id: 2, v: "b" }], label: 'uniqueBy(arr, "id")' },
      { args: [[{ n: "x" }, { n: "x" }, { n: "y" }], "n"], expected: [{ n: "x" }, { n: "y" }], label: 'uniqueBy duplicates' },
    ],
    hint: "Use a Set to track seen keys. Filter the array, adding to the Set on first occurrence.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CYBERSECURITY
// ─────────────────────────────────────────────────────────────────────────────
const secQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Caesar Cipher",
    prompt: `Implement \`caesarCipher(text, shift)\` that encodes a string using a Caesar cipher.

Shift each letter by \`shift\` positions in the alphabet (wrapping around). Preserve case. Leave non-letter characters unchanged.

Example: caesarCipher("Hello, World!", 3) → "Khoor, Zruog!"`,
    starterCode: `function caesarCipher(text, shift) {
  // Your code here
}`,
    functionName: "caesarCipher",
    testCases: [
      { args: ["Hello", 3], expected: "Khoor", label: 'caesarCipher("Hello", 3)' },
      { args: ["xyz", 3], expected: "abc", label: 'caesarCipher("xyz", 3) wraps' },
      { args: ["ABC", 1], expected: "BCD", label: 'caesarCipher("ABC", 1)' },
      { args: ["Hello, World!", 3], expected: "Khoor, Zruog!", label: 'caesarCipher full' },
    ],
    hint: "Use charCodeAt to get the code, shift within a-z or A-Z range using modulo 26.",
  },
  {
    id: 2,
    title: "XOR Encryption",
    prompt: `Implement \`xorEncrypt(text, key)\` that XORs each character's char code with the corresponding character of \`key\` (cycling through key if shorter).

Return the result as a comma-separated string of char codes.

Example: xorEncrypt("AB", "k") → "42,43" (charCodes after XOR)`,
    starterCode: `function xorEncrypt(text, key) {
  // Your code here
}`,
    functionName: "xorEncrypt",
    testCases: [
      { args: ["AB", "k"], expected: "42,41", label: 'xorEncrypt("AB", "k")' },
      { args: ["a", "a"], expected: "0", label: 'xorEncrypt("a","a") = 0' },
    ],
    hint: "Use charCodeAt and XOR (^). key index = i % key.length. Join results with commas.",
  },
  {
    id: 3,
    title: "Password Strength",
    prompt: `Implement \`passwordStrength(password)\` that returns:
- "weak" if fewer than 8 characters
- "medium" if 8+ characters with only letters/digits
- "strong" if 8+ characters with at least one uppercase, one digit, and one special character (!@#$%^&*)`,
    starterCode: `function passwordStrength(password) {
  // Your code here
}`,
    functionName: "passwordStrength",
    testCases: [
      { args: ["abc"], expected: "weak", label: '"abc" is weak' },
      { args: ["abcdefgh"], expected: "medium", label: '"abcdefgh" is medium' },
      { args: ["Abcdef1!"], expected: "strong", label: '"Abcdef1!" is strong' },
      { args: ["password"], expected: "medium", label: '"password" is medium' },
    ],
    hint: "Check length first, then use regex tests for uppercase /[A-Z]/, digit /[0-9]/, special /[!@#$%^&*]/.",
  },
  {
    id: 4,
    title: "Sanitize Input",
    prompt: `Implement \`sanitizeHtml(input)\` that removes HTML tags and encodes special characters to prevent XSS attacks.

Replace:
- \`<\` with \`&lt;\`
- \`>\` with \`&gt;\`
- \`&\` with \`&amp;\`
- \`"\` with \`&quot;\`

Then strip any remaining HTML tags using a regex.`,
    starterCode: `function sanitizeHtml(input) {
  // Your code here
}`,
    functionName: "sanitizeHtml",
    testCases: [
      { args: ['<script>alert("xss")</script>'], expected: "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;", label: "sanitizeHtml script tag" },
      { args: ["Hello & World"], expected: "Hello &amp; World", label: "sanitizeHtml ampersand" },
      { args: ["Safe text"], expected: "Safe text", label: "sanitizeHtml safe text" },
    ],
    hint: "Replace characters in order: & first (to avoid double-encoding), then <, >, and \".",
  },
  {
    id: 5,
    title: "Hash Function (djb2)",
    prompt: `Implement the djb2 hash function \`djb2Hash(str)\`.

Start with hash = 5381. For each character: hash = (hash * 33) XOR charCode.

Return the final hash as a positive integer (use >>> 0 to convert to unsigned 32-bit integer).`,
    starterCode: `function djb2Hash(str) {
  // Your code here
}`,
    functionName: "djb2Hash",
    testCases: [
      { args: ["hello"], expected: 178056679, label: 'djb2Hash("hello")' },
      { args: [""], expected: 5381, label: 'djb2Hash("") = 5381' },
      { args: ["a"], expected: 177604, label: 'djb2Hash("a")' },
    ],
    hint: "Use a for loop. hash = ((hash << 5) + hash) ^ charCode is equivalent to hash * 33 ^ charCode.",
  },
  {
    id: 6,
    title: "Generate OTP",
    prompt: `Implement \`generateOTP(length)\` that returns a random numeric OTP (one-time password) of the given length as a string.

The OTP should always have exactly \`length\` digits, including leading zeros.

Example: generateOTP(6) → "048271" (a random 6-digit string)`,
    starterCode: `function generateOTP(length) {
  // Your code here
}`,
    functionName: "generateOTP",
    testCases: [
      { args: [6], expected: 6, label: "generateOTP(6) has length 6" },
      { args: [4], expected: 4, label: "generateOTP(4) has length 4" },
    ],
    hint: "Use a loop to generate `length` random digits (Math.floor(Math.random()*10)) and join them as a string.",
  },
  {
    id: 7,
    title: "JWT Decode (Header)",
    prompt: `Implement \`decodeJwtHeader(token)\` that decodes and returns the header of a JWT token.

A JWT looks like: \`header.payload.signature\`

The header and payload are Base64URL encoded JSON. Decode the header part and return the parsed object.

Hint: Base64URL replaces + with - and / with _. Use atob() to decode.`,
    starterCode: `function decodeJwtHeader(token) {
  // Your code here
}`,
    functionName: "decodeJwtHeader",
    testCases: [
      {
        args: ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.payload.sig"],
        expected: { alg: "HS256", typ: "JWT" },
        label: "decodeJwtHeader standard token",
      },
    ],
    hint: "Split by '.', take index 0. Replace - with + and _ with /. Use atob() then JSON.parse().",
  },
  {
    id: 8,
    title: "Validate Email",
    prompt: `Implement \`validateEmail(email)\` that returns \`true\` if the email is valid, \`false\` otherwise.

A valid email must have:
- At least one character before @
- An @ symbol
- A domain with at least one dot
- At least 2 characters after the last dot`,
    starterCode: `function validateEmail(email) {
  // Your code here
}`,
    functionName: "validateEmail",
    testCases: [
      { args: ["user@example.com"], expected: true, label: "valid email" },
      { args: ["invalid.email"], expected: false, label: "no @ sign" },
      { args: ["@example.com"], expected: false, label: "nothing before @" },
      { args: ["user@.com"], expected: false, label: "nothing before dot" },
      { args: ["user@example.c"], expected: false, label: "TLD too short" },
    ],
    hint: "Use a regex like /^[^@]+@[^@]+\\.[^@]{2,}$/ and test against it.",
  },
  {
    id: 9,
    title: "Constant Time Compare",
    prompt: `Implement \`safeCompare(a, b)\` that compares two strings in constant time to prevent timing attacks.

Both strings must be compared character by character without short-circuiting, even if they differ early on. Return \`true\` only if both strings are identical.`,
    starterCode: `function safeCompare(a, b) {
  // Your code here
}`,
    functionName: "safeCompare",
    testCases: [
      { args: ["abc", "abc"], expected: true, label: 'safeCompare("abc","abc")' },
      { args: ["abc", "abd"], expected: false, label: 'safeCompare("abc","abd")' },
      { args: ["abc", "ab"], expected: false, label: "different lengths" },
    ],
    hint: "Compare lengths first. Then XOR each char code and OR the results together — if any differ, the result won't be 0.",
  },
  {
    id: 10,
    title: "Parse Cookie Header",
    prompt: `Implement \`parseCookies(cookieHeader)\` that parses a Cookie HTTP header string into an object.

Cookie format: "name1=value1; name2=value2"

Example: parseCookies("session=abc123; theme=dark") → { session: "abc123", theme: "dark" }`,
    starterCode: `function parseCookies(cookieHeader) {
  // Your code here
}`,
    functionName: "parseCookies",
    testCases: [
      { args: ["session=abc; theme=dark"], expected: { session: "abc", theme: "dark" }, label: "parseCookies two cookies" },
      { args: ["token=xyz123"], expected: { token: "xyz123" }, label: "parseCookies one cookie" },
      { args: [""], expected: {}, label: "parseCookies empty" },
    ],
    hint: "Split by '; ', then split each pair by '=' (limit to 2 parts in case values contain =). Trim whitespace.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ARTIFICIAL INTELLIGENCE
// ─────────────────────────────────────────────────────────────────────────────
const aiQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Dot Product",
    prompt: `Implement \`dotProduct(a, b)\` that computes the dot product of two vectors (arrays of numbers).

The dot product is the sum of element-wise products.

Example: dotProduct([1,2,3], [4,5,6]) → 1*4 + 2*5 + 3*6 = 32

Assume both arrays have the same length.`,
    starterCode: `function dotProduct(a, b) {
  // Your code here
}`,
    functionName: "dotProduct",
    testCases: [
      { args: [[1, 2, 3], [4, 5, 6]], expected: 32, label: "dotProduct([1,2,3],[4,5,6])" },
      { args: [[0, 1], [1, 0]], expected: 0, label: "dotProduct orthogonal" },
      { args: [[2, 3], [2, 3]], expected: 13, label: "dotProduct same vector" },
    ],
    hint: "Reduce over the array, accumulating a[i] * b[i] for each index.",
  },
  {
    id: 2,
    title: "Sigmoid Function",
    prompt: `Implement the sigmoid activation function \`sigmoid(x)\`.

Formula: sigmoid(x) = 1 / (1 + e^(-x))

This is a fundamental building block of neural networks, squashing any input to a value between 0 and 1.

Return the result rounded to 6 decimal places.`,
    starterCode: `function sigmoid(x) {
  // Your code here
}`,
    functionName: "sigmoid",
    testCases: [
      { args: [0], expected: 0.5, label: "sigmoid(0) = 0.5" },
      { args: [1], expected: 0.731059, label: "sigmoid(1) ≈ 0.731059" },
      { args: [-1], expected: 0.268941, label: "sigmoid(-1) ≈ 0.268941" },
    ],
    hint: "Use Math.exp(-x). Return parseFloat((1 / (1 + Math.exp(-x))).toFixed(6)).",
  },
  {
    id: 3,
    title: "Softmax",
    prompt: `Implement the softmax function \`softmax(arr)\` that converts an array of numbers into a probability distribution.

Formula for each element: exp(x_i) / sum(exp(x_j) for all j)

All outputs sum to 1. Return each value rounded to 6 decimal places.

Example: softmax([1, 2, 3]) → [0.090031, 0.244728, 0.665241]`,
    starterCode: `function softmax(arr) {
  // Your code here
}`,
    functionName: "softmax",
    testCases: [
      { args: [[1, 2, 3]], expected: [0.090031, 0.244728, 0.665241], label: "softmax([1,2,3])" },
      { args: [[0, 0]], expected: [0.5, 0.5], label: "softmax([0,0]) = [0.5,0.5]" },
    ],
    hint: "Compute Math.exp(x) for each element. Sum all, then divide each by the sum. Round to 6 dp.",
  },
  {
    id: 4,
    title: "Euclidean Distance",
    prompt: `Implement \`euclideanDistance(a, b)\` that computes the Euclidean distance between two n-dimensional points.

Formula: sqrt(sum of (a_i - b_i)^2 for all i)

Return the result rounded to 4 decimal places.`,
    starterCode: `function euclideanDistance(a, b) {
  // Your code here
}`,
    functionName: "euclideanDistance",
    testCases: [
      { args: [[0, 0], [3, 4]], expected: 5, label: "euclideanDistance 3-4-5 triangle" },
      { args: [[1, 2, 3], [4, 5, 6]], expected: 5.1962, label: "euclideanDistance 3D" },
      { args: [[0], [0]], expected: 0, label: "euclideanDistance same point" },
    ],
    hint: "Sum (a[i]-b[i])^2 for each index, then return Math.sqrt of the sum.",
  },
  {
    id: 5,
    title: "Cosine Similarity",
    prompt: `Implement \`cosineSimilarity(a, b)\` that measures the cosine similarity between two vectors.

Formula: (a · b) / (||a|| * ||b||)

Where ||a|| is the magnitude (sqrt of sum of squares).

Return the result rounded to 4 decimal places. Return 0 if either vector is zero.`,
    starterCode: `function cosineSimilarity(a, b) {
  // Your code here
}`,
    functionName: "cosineSimilarity",
    testCases: [
      { args: [[1, 0], [0, 1]], expected: 0, label: "cosine of orthogonal vectors = 0" },
      { args: [[1, 1], [1, 1]], expected: 1, label: "cosine of same vectors = 1" },
      { args: [[1, 2], [2, 4]], expected: 1, label: "cosine of parallel vectors = 1" },
    ],
    hint: "Compute dot product, then magnitudes. Divide. Return 0 if magnitudeA * magnitudeB === 0.",
  },
  {
    id: 6,
    title: "Normalize Vector",
    prompt: `Implement \`normalizeVector(v)\` that returns a unit vector (length 1) in the same direction as \`v\`.

Divide each element by the vector's magnitude (L2 norm).

Return each value rounded to 4 decimal places. If the zero vector is passed, return the same zero vector.`,
    starterCode: `function normalizeVector(v) {
  // Your code here
}`,
    functionName: "normalizeVector",
    testCases: [
      { args: [[3, 4]], expected: [0.6, 0.8], label: "normalize([3,4])" },
      { args: [[1, 0, 0]], expected: [1, 0, 0], label: "normalize unit vector stays" },
      { args: [[0, 0]], expected: [0, 0], label: "normalize zero vector" },
    ],
    hint: "Compute magnitude = sqrt(sum of squares). Divide each element by magnitude.",
  },
  {
    id: 7,
    title: "K-Nearest Neighbors",
    prompt: `Implement \`knn(points, query, k)\` that finds the \`k\` nearest points to \`query\` using Euclidean distance.

Each point is \`{ x, y, label }\`. Return the most common label among the k nearest points.

If there's a tie in labels, return the one that appears first alphabetically.`,
    starterCode: `function knn(points, query, k) {
  // Your code here
}`,
    functionName: "knn",
    testCases: [
      {
        args: [
          [{ x: 1, y: 1, label: "A" }, { x: 2, y: 2, label: "A" }, { x: 10, y: 10, label: "B" }],
          { x: 1.5, y: 1.5 }, 2
        ],
        expected: "A",
        label: "knn predicts nearest class",
      },
    ],
    hint: "Sort points by Euclidean distance to query. Take first k. Count labels, return the most frequent.",
  },
  {
    id: 8,
    title: "Mean Squared Error",
    prompt: `Implement \`mse(predictions, actuals)\` that computes the Mean Squared Error between predictions and actual values.

Formula: (1/n) * sum((predictions[i] - actuals[i])^2)

Return the result rounded to 4 decimal places.`,
    starterCode: `function mse(predictions, actuals) {
  // Your code here
}`,
    functionName: "mse",
    testCases: [
      { args: [[3, -0.5, 2, 7], [2.5, 0, 2, 8]], expected: 0.375, label: "mse standard case" },
      { args: [[1, 2, 3], [1, 2, 3]], expected: 0, label: "perfect predictions → mse = 0" },
      { args: [[0], [1]], expected: 1, label: "mse single item" },
    ],
    hint: "Sum (pred[i] - actual[i])^2 for each i, divide by n, round to 4 dp.",
  },
  {
    id: 9,
    title: "Tokenize Text",
    prompt: `Implement \`tokenize(text)\` that splits text into tokens (words) for NLP processing.

Rules:
- Convert to lowercase
- Remove punctuation (keep only letters, digits, and spaces)
- Split by whitespace
- Remove empty tokens
- Return the array of tokens`,
    starterCode: `function tokenize(text) {
  // Your code here
}`,
    functionName: "tokenize",
    testCases: [
      { args: ["Hello, World!"], expected: ["hello", "world"], label: 'tokenize("Hello, World!")' },
      { args: ["AI is great. Really!"], expected: ["ai", "is", "great", "really"], label: "tokenize sentence" },
      { args: ["  spaces  "], expected: ["spaces"], label: "tokenize with spaces" },
    ],
    hint: "Use .toLowerCase(), then /[^a-z0-9\\s]/g to remove punctuation, then .split(/\\s+/).filter(Boolean).",
  },
  {
    id: 10,
    title: "Gradient Descent Step",
    prompt: `Implement \`gradientDescentStep(weights, gradients, learningRate)\`.

In machine learning, gradient descent updates parameters by subtracting the gradient scaled by the learning rate.

Formula: weights[i] = weights[i] - learningRate * gradients[i]

Return the new weights array rounded to 6 decimal places.`,
    starterCode: `function gradientDescentStep(weights, gradients, learningRate) {
  // Your code here
}`,
    functionName: "gradientDescentStep",
    testCases: [
      { args: [[1, 2, 3], [0.1, 0.2, 0.3], 0.5], expected: [0.95, 1.9, 2.85], label: "gradientDescentStep basic" },
      { args: [[0], [0], 0.1], expected: [0], label: "zero gradient no change" },
    ],
    hint: "Map over weights: weights[i] - learningRate * gradients[i]. Round each to 6 dp.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GAME DEVELOPMENT
// ─────────────────────────────────────────────────────────────────────────────
const gameQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Clamp Value",
    prompt: `Implement \`clamp(value, min, max)\` that constrains a value to be within a min-max range.

If value < min, return min. If value > max, return max. Otherwise return value.

This is used constantly in game dev for things like health, position bounds, and volume.`,
    starterCode: `function clamp(value, min, max) {
  // Your code here
}`,
    functionName: "clamp",
    testCases: [
      { args: [5, 0, 10], expected: 5, label: "clamp(5,0,10) in range" },
      { args: [-5, 0, 10], expected: 0, label: "clamp(-5,0,10) below min" },
      { args: [15, 0, 10], expected: 10, label: "clamp(15,0,10) above max" },
    ],
    hint: "Use Math.min and Math.max: return Math.min(Math.max(value, min), max).",
  },
  {
    id: 2,
    title: "AABB Collision",
    prompt: `Implement \`aabbCollide(rectA, rectB)\` that checks if two axis-aligned bounding boxes overlap.

Each rect is \`{ x, y, width, height }\` where (x,y) is the top-left corner.

Two rects collide if they overlap on both axes.`,
    starterCode: `function aabbCollide(rectA, rectB) {
  // Your code here
}`,
    functionName: "aabbCollide",
    testCases: [
      { args: [{ x: 0, y: 0, width: 10, height: 10 }, { x: 5, y: 5, width: 10, height: 10 }], expected: true, label: "overlapping rects" },
      { args: [{ x: 0, y: 0, width: 5, height: 5 }, { x: 10, y: 10, width: 5, height: 5 }], expected: false, label: "non-overlapping rects" },
      { args: [{ x: 0, y: 0, width: 10, height: 10 }, { x: 10, y: 0, width: 5, height: 5 }], expected: false, label: "touching edge (not colliding)" },
    ],
    hint: "No collision if: a.x+a.width <= b.x OR b.x+b.width <= a.x OR a.y+a.height <= b.y OR b.y+b.height <= a.y",
  },
  {
    id: 3,
    title: "Lerp",
    prompt: `Implement \`lerp(start, end, t)\` — linear interpolation.

Returns the value that is \`t\` of the way between \`start\` and \`end\`.

Formula: start + (end - start) * t

\`t\` is typically in [0, 1]. This is used for smooth movement, transitions, and camera tracking.`,
    starterCode: `function lerp(start, end, t) {
  // Your code here
}`,
    functionName: "lerp",
    testCases: [
      { args: [0, 10, 0.5], expected: 5, label: "lerp(0,10,0.5) = 5" },
      { args: [0, 100, 0], expected: 0, label: "lerp at t=0 = start" },
      { args: [0, 100, 1], expected: 100, label: "lerp at t=1 = end" },
      { args: [10, 20, 0.25], expected: 12.5, label: "lerp(10,20,0.25)" },
    ],
    hint: "Simple formula: return start + (end - start) * t;",
  },
  {
    id: 4,
    title: "Random Integer in Range",
    prompt: `Implement \`randInt(min, max)\` that returns a random integer between \`min\` and \`max\` (both inclusive).

Verify your implementation:
- randInt(1, 6) simulates a dice roll → always 1, 2, 3, 4, 5, or 6`,
    starterCode: `function randInt(min, max) {
  // Your code here
}`,
    functionName: "randInt",
    testCases: [
      { args: [5, 5], expected: 5, label: "randInt(5,5) always 5" },
      { args: [0, 0], expected: 0, label: "randInt(0,0) always 0" },
    ],
    hint: "Use Math.floor(Math.random() * (max - min + 1)) + min.",
  },
  {
    id: 5,
    title: "Pathfinding: Shortest Path",
    prompt: `Implement \`bfsShortestPath(grid, start, end)\`.

\`grid\` is a 2D array of 0s (passable) and 1s (walls). \`start\` and \`end\` are [row, col] pairs.

Return the minimum number of steps to reach \`end\` from \`start\`, or -1 if unreachable.

Move up, down, left, right only.`,
    starterCode: `function bfsShortestPath(grid, start, end) {
  // Your code here
}`,
    functionName: "bfsShortestPath",
    testCases: [
      {
        args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], [0, 0], [2, 2]],
        expected: 4,
        label: "bfs around wall",
      },
      {
        args: [[[0, 1], [1, 0]], [0, 0], [1, 1]],
        expected: -1,
        label: "bfs unreachable",
      },
    ],
    hint: "Use BFS with a queue. Track visited cells. Enqueue neighbors that are 0 and unvisited. Return steps when end is reached.",
  },
  {
    id: 6,
    title: "State Machine",
    prompt: `Implement \`createStateMachine(initial, transitions)\`.

\`transitions\` is an object: { STATE: { ACTION: NEXT_STATE } }.

Return an object with:
- \`state\`: current state
- \`dispatch(action)\`: transitions to the next state if valid, otherwise stays

Example: createStateMachine('idle', { idle: { start: 'running' }, running: { stop: 'idle' } })`,
    starterCode: `function createStateMachine(initial, transitions) {
  // Your code here
}`,
    functionName: "createStateMachine",
    testCases: [
      { args: ["idle", { idle: { start: "running" } }], expected: "object", label: "createStateMachine returns object" },
    ],
    hint: "Store state in a variable. dispatch() looks up transitions[state][action] and updates state if found.",
  },
  {
    id: 7,
    title: "Shuffle Array (Fisher-Yates)",
    prompt: `Implement \`shuffle(arr)\` that shuffles an array in place using the Fisher-Yates algorithm and returns the array.

Fisher-Yates: iterate from the last element to index 1. At each step, pick a random index from 0 to current, and swap.

This is used in games for randomizing cards, enemies, loot, etc.`,
    starterCode: `function shuffle(arr) {
  // Your code here
}`,
    functionName: "shuffle",
    testCases: [
      { args: [[1, 2, 3, 4, 5]], expected: 5, label: "shuffle preserves length" },
      { args: [[42]], expected: [42], label: "single element stays" },
    ],
    hint: "for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i+1)); swap arr[i] and arr[j]; }",
  },
  {
    id: 8,
    title: "Distance Between Points",
    prompt: `Implement \`distance2D(p1, p2)\` that calculates the Euclidean distance between two 2D points.

Each point is \`{ x, y }\`.

Return the result rounded to 2 decimal places.

Used for collision detection radius checks, AI targeting, etc.`,
    starterCode: `function distance2D(p1, p2) {
  // Your code here
}`,
    functionName: "distance2D",
    testCases: [
      { args: [{ x: 0, y: 0 }, { x: 3, y: 4 }], expected: 5, label: "distance2D 3-4-5" },
      { args: [{ x: 1, y: 1 }, { x: 1, y: 1 }], expected: 0, label: "same point = 0" },
      { args: [{ x: 0, y: 0 }, { x: 1, y: 1 }], expected: 1.41, label: "distance2D diagonal" },
    ],
    hint: "Math.sqrt((p2.x-p1.x)^2 + (p2.y-p1.y)^2). Use ** 2 or Math.pow.",
  },
  {
    id: 9,
    title: "Tile Map Lookup",
    prompt: `Implement \`getTile(tileMap, tileSize, worldX, worldY)\` that returns the tile value at a world position.

\`tileMap\` is a 2D array. Each tile is \`tileSize\` pixels wide and tall.

Return the tile value, or null if out of bounds.`,
    starterCode: `function getTile(tileMap, tileSize, worldX, worldY) {
  // Your code here
}`,
    functionName: "getTile",
    testCases: [
      { args: [[[1, 2], [3, 4]], 32, 0, 0], expected: 1, label: "getTile(0,0)" },
      { args: [[[1, 2], [3, 4]], 32, 32, 0], expected: 2, label: "getTile(32,0)" },
      { args: [[[1, 2], [3, 4]], 32, 0, 32], expected: 3, label: "getTile(0,32)" },
      { args: [[[1, 2], [3, 4]], 32, 200, 200], expected: null, label: "getTile out of bounds" },
    ],
    hint: "row = Math.floor(worldY / tileSize), col = Math.floor(worldX / tileSize). Check bounds before accessing.",
  },
  {
    id: 10,
    title: "Angle Between Vectors",
    prompt: `Implement \`angleBetween(v1, v2)\` that returns the angle in degrees between two 2D vectors.

Each vector is \`{ x, y }\`.

Use the formula: angle = acos((v1·v2) / (|v1| * |v2|))

Return degrees rounded to 2 decimal places. Return 0 if either is a zero vector.`,
    starterCode: `function angleBetween(v1, v2) {
  // Your code here
}`,
    functionName: "angleBetween",
    testCases: [
      { args: [{ x: 1, y: 0 }, { x: 0, y: 1 }], expected: 90, label: "angleBetween perpendicular = 90°" },
      { args: [{ x: 1, y: 0 }, { x: 1, y: 0 }], expected: 0, label: "angleBetween same = 0°" },
      { args: [{ x: 1, y: 0 }, { x: -1, y: 0 }], expected: 180, label: "angleBetween opposite = 180°" },
    ],
    hint: "Dot product / (mag1 * mag2). Then Math.acos, convert to degrees: rad * (180 / Math.PI).",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// QUALITY ASSURANCE
// ─────────────────────────────────────────────────────────────────────────────
const qaQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Assert Equal",
    prompt: `Implement \`assertEqual(actual, expected, message)\`.

If \`actual\` deeply equals \`expected\`, return \`{ pass: true }\`.
Otherwise return \`{ pass: false, message: message || "Expected X but got Y" }\`.

Use JSON.stringify for deep comparison.`,
    starterCode: `function assertEqual(actual, expected, message) {
  // Your code here
}`,
    functionName: "assertEqual",
    testCases: [
      { args: [1, 1, "should match"], expected: { pass: true }, label: "assertEqual pass" },
      { args: [1, 2, "fail"], expected: { pass: false, message: "fail" }, label: "assertEqual fail with message" },
    ],
    hint: "JSON.stringify(actual) === JSON.stringify(expected). Return {pass:true} or {pass:false, message}.",
  },
  {
    id: 2,
    title: "Run Test Suite",
    prompt: `Implement \`runTests(tests)\` where \`tests\` is an array of \`{ name, fn }\` objects.

Call each \`fn()\`. If it returns \`{ pass: true }\`, the test passes. Otherwise it fails.

Return \`{ passed: number, failed: number, results: [{name, pass}] }\`.`,
    starterCode: `function runTests(tests) {
  // Your code here
}`,
    functionName: "runTests",
    testCases: [
      {
        args: [[{ name: "t1", fn: () => ({ pass: true }) }, { name: "t2", fn: () => ({ pass: false }) }]],
        expected: { passed: 1, failed: 1, results: [{ name: "t1", pass: true }, { name: "t2", pass: false }] },
        label: "runTests 1 pass 1 fail",
      },
    ],
    hint: "Reduce or forEach over tests. Call fn(), check result.pass, increment counters, push to results.",
  },
  {
    id: 3,
    title: "Validate Schema",
    prompt: `Implement \`validateSchema(obj, schema)\`.

\`schema\` is an object where each key maps to a type string: "string", "number", "boolean", "array".

Return \`{ valid: true }\` if all keys match their expected type. Otherwise return \`{ valid: false, errors: ["key: expected X got Y"] }\`.`,
    starterCode: `function validateSchema(obj, schema) {
  // Your code here
}`,
    functionName: "validateSchema",
    testCases: [
      { args: [{ name: "Alice", age: 30 }, { name: "string", age: "number" }], expected: { valid: true }, label: "valid schema" },
      { args: [{ name: 123 }, { name: "string" }], expected: { valid: false, errors: ["name: expected string got number"] }, label: "invalid schema" },
    ],
    hint: "Iterate schema keys. Use typeof for string/number/boolean; Array.isArray for array. Collect errors.",
  },
  {
    id: 4,
    title: "Mock Function",
    prompt: `Implement \`createMock()\` that returns a mock function.

The returned function:
- Can be called with any arguments
- Records each call in a \`.calls\` array (each entry is the args array)
- Returns undefined by default
- Has a \`.mockReturnValue(val)\` method to set what it returns`,
    starterCode: `function createMock() {
  // Your code here
}`,
    functionName: "createMock",
    testCases: [
      { args: [], expected: "function", label: "createMock returns a function" },
    ],
    hint: "Create a function that pushes arguments to a .calls array. Add .mockReturnValue as a method on the function object.",
  },
  {
    id: 5,
    title: "Snapshot Comparison",
    prompt: `Implement \`matchSnapshot(value, snapshot)\`.

If \`snapshot\` is null (first run), return \`{ matched: true, snapshot: JSON.stringify(value) }\`.
If \`snapshot\` exists, compare JSON.stringify(value) to snapshot.
Return \`{ matched: true/false, snapshot }\`.`,
    starterCode: `function matchSnapshot(value, snapshot) {
  // Your code here
}`,
    functionName: "matchSnapshot",
    testCases: [
      { args: [{ a: 1 }, null], expected: { matched: true, snapshot: '{"a":1}' }, label: "first run creates snapshot" },
      { args: [{ a: 1 }, '{"a":1}'], expected: { matched: true, snapshot: '{"a":1}' }, label: "matching snapshot" },
      { args: [{ a: 2 }, '{"a":1}'], expected: { matched: false, snapshot: '{"a":1}' }, label: "snapshot mismatch" },
    ],
    hint: "If snapshot is null, return {matched:true, snapshot:JSON.stringify(value)}. Else compare and return accordingly.",
  },
  {
    id: 6,
    title: "Retry Until Success",
    prompt: `Implement \`retryUntil(fn, maxAttempts)\`.

Call \`fn()\` repeatedly. If it returns a truthy value, return \`{ success: true, attempts: n }\`.
If all attempts are exhausted, return \`{ success: false, attempts: maxAttempts }\`.`,
    starterCode: `function retryUntil(fn, maxAttempts) {
  // Your code here
}`,
    functionName: "retryUntil",
    testCases: [
      { args: [() => true, 3], expected: { success: true, attempts: 1 }, label: "succeeds first try" },
      { args: [() => false, 3], expected: { success: false, attempts: 3 }, label: "exhausts all attempts" },
    ],
    hint: "Use a loop from 1 to maxAttempts. Call fn() each time. Return success on truthy result.",
  },
  {
    id: 7,
    title: "Spy on Object Method",
    prompt: `Implement \`spyOn(obj, methodName)\` that wraps an object's method to track calls.

It should:
- Replace \`obj[methodName]\` with a wrapper
- The wrapper calls the original method and records the call
- Return an object with \`.calls\` (array of argument arrays) and \`.restore()\` to unwrap`,
    starterCode: `function spyOn(obj, methodName) {
  // Your code here
}`,
    functionName: "spyOn",
    testCases: [
      { args: [], expected: "function", label: "spyOn returns spy object" },
    ],
    hint: "Save original = obj[methodName]. Replace with wrapper that pushes args to calls and calls original. restore() sets it back.",
  },
  {
    id: 8,
    title: "Test Data Generator",
    prompt: `Implement \`generateUser(overrides)\` that returns a default user object merged with any overrides.

Default user: \`{ id: 1, name: "Test User", email: "test@example.com", role: "user", active: true }\`

\`overrides\` is an optional object that replaces specific fields.

Example: generateUser({ name: "Alice" }) → { id: 1, name: "Alice", email: "test@example.com", ... }`,
    starterCode: `function generateUser(overrides = {}) {
  // Your code here
}`,
    functionName: "generateUser",
    testCases: [
      { args: [{}], expected: { id: 1, name: "Test User", email: "test@example.com", role: "user", active: true }, label: "default user" },
      { args: [{ name: "Alice", role: "admin" }], expected: { id: 1, name: "Alice", email: "test@example.com", role: "admin", active: true }, label: "with overrides" },
    ],
    hint: "Spread the defaults object, then spread overrides: { ...defaults, ...overrides }",
  },
  {
    id: 9,
    title: "Filter Test Results",
    prompt: `Given an array of test result objects \`{ name, pass, duration }\`, implement \`filterResults(results, filter)\`.

\`filter\` can be "passed", "failed", or "slow" (duration > 100ms).

Return only the matching results.`,
    starterCode: `function filterResults(results, filter) {
  // Your code here
}`,
    functionName: "filterResults",
    testCases: [
      {
        args: [[{ name: "t1", pass: true, duration: 50 }, { name: "t2", pass: false, duration: 200 }], "failed"],
        expected: [{ name: "t2", pass: false, duration: 200 }],
        label: 'filter "failed"',
      },
      {
        args: [[{ name: "t1", pass: true, duration: 150 }, { name: "t2", pass: true, duration: 30 }], "slow"],
        expected: [{ name: "t1", pass: true, duration: 150 }],
        label: 'filter "slow"',
      },
    ],
    hint: 'Use .filter(). For "passed": r.pass === true. For "failed": !r.pass. For "slow": r.duration > 100.',
  },
  {
    id: 10,
    title: "Coverage Report",
    prompt: `Implement \`coverageReport(totalLines, coveredLines)\`.

Return:
\`{ total: N, covered: N, percentage: "XX.XX%", status: "pass"|"fail" }\`

Status is "pass" if coverage >= 80%, "fail" otherwise.
Percentage is formatted to 2 decimal places.`,
    starterCode: `function coverageReport(totalLines, coveredLines) {
  // Your code here
}`,
    functionName: "coverageReport",
    testCases: [
      { args: [100, 90], expected: { total: 100, covered: 90, percentage: "90.00%", status: "pass" }, label: "90% coverage passes" },
      { args: [100, 70], expected: { total: 100, covered: 70, percentage: "70.00%", status: "fail" }, label: "70% coverage fails" },
      { args: [50, 40], expected: { total: 50, covered: 40, percentage: "80.00%", status: "pass" }, label: "80% is pass" },
    ],
    hint: "percentage = (coveredLines/totalLines*100).toFixed(2) + '%'. status = percentage >= 80 ? 'pass' : 'fail'.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT MANAGEMENT
// ─────────────────────────────────────────────────────────────────────────────
const pmQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Calculate MRR",
    prompt: `Implement \`calculateMRR(subscriptions)\` where subscriptions is an array of \`{ plan, monthlyPrice, count }\`.

Return the total Monthly Recurring Revenue.

Example: [{plan:"pro", monthlyPrice:29, count:10}, {plan:"basic", monthlyPrice:9, count:5}]
→ 29*10 + 9*5 = 335`,
    starterCode: `function calculateMRR(subscriptions) {
  // Your code here
}`,
    functionName: "calculateMRR",
    testCases: [
      { args: [[{ plan: "pro", monthlyPrice: 29, count: 10 }, { plan: "basic", monthlyPrice: 9, count: 5 }]], expected: 335, label: "calculateMRR" },
      { args: [[{ plan: "x", monthlyPrice: 100, count: 1 }]], expected: 100, label: "single plan" },
      { args: [[]], expected: 0, label: "empty = 0" },
    ],
    hint: "Use .reduce() to sum monthlyPrice * count for each subscription.",
  },
  {
    id: 2,
    title: "RICE Score",
    prompt: `Implement \`riceScore({ reach, impact, confidence, effort })\` that calculates the RICE prioritization score.

Formula: (Reach * Impact * Confidence) / Effort

All values are numbers. Return the result rounded to 2 decimal places.`,
    starterCode: `function riceScore({ reach, impact, confidence, effort }) {
  // Your code here
}`,
    functionName: "riceScore",
    testCases: [
      { args: [{ reach: 100, impact: 3, confidence: 0.8, effort: 2 }], expected: 120, label: "riceScore basic" },
      { args: [{ reach: 50, impact: 2, confidence: 1, effort: 5 }], expected: 20, label: "riceScore low effort" },
    ],
    hint: "return parseFloat(((reach * impact * confidence) / effort).toFixed(2))",
  },
  {
    id: 3,
    title: "Churn Rate",
    prompt: `Implement \`churnRate(customersAtStart, customersLost)\` that returns the churn rate as a percentage string.

Formula: (customersLost / customersAtStart) * 100

Return the string formatted to 2 decimal places, e.g. "5.00%".`,
    starterCode: `function churnRate(customersAtStart, customersLost) {
  // Your code here
}`,
    functionName: "churnRate",
    testCases: [
      { args: [100, 5], expected: "5.00%", label: "churnRate 5%" },
      { args: [200, 40], expected: "20.00%", label: "churnRate 20%" },
      { args: [0, 0], expected: "0.00%", label: "churnRate 0 customers" },
    ],
    hint: "Return (customersLost/customersAtStart*100).toFixed(2)+'%'. Handle division by zero.",
  },
  {
    id: 4,
    title: "Feature Flag",
    prompt: `Implement \`createFeatureFlags(flags)\` where \`flags\` is \`{ [featureName]: rolloutPercentage }\`.

Return an object with \`isEnabled(featureName, userId)\` that returns true if:
- The feature exists
- (userId % 100) < rolloutPercentage

This simulates a percentage-based rollout.`,
    starterCode: `function createFeatureFlags(flags) {
  // Your code here
  return {
    isEnabled(featureName, userId) {
      // Your code here
    }
  };
}`,
    functionName: "createFeatureFlags",
    testCases: [
      { args: [{ newUI: 100 }], expected: "object", label: "createFeatureFlags returns object" },
    ],
    hint: "isEnabled: if flags[featureName] is undefined, return false. Otherwise return (userId % 100) < flags[featureName].",
  },
  {
    id: 5,
    title: "User Retention Cohort",
    prompt: `Implement \`retentionRate(day0Users, dayNUsers)\` that calculates the retention rate for a cohort.

Formula: (dayNUsers / day0Users) * 100

Return a number rounded to 2 decimal places.`,
    starterCode: `function retentionRate(day0Users, dayNUsers) {
  // Your code here
}`,
    functionName: "retentionRate",
    testCases: [
      { args: [1000, 400], expected: 40, label: "40% retention" },
      { args: [500, 500], expected: 100, label: "100% retention" },
      { args: [200, 0], expected: 0, label: "0% retention" },
    ],
    hint: "return parseFloat(((dayNUsers / day0Users) * 100).toFixed(2))",
  },
  {
    id: 6,
    title: "Backlog Prioritizer",
    prompt: `Implement \`prioritizeBacklog(items)\` where each item is \`{ title, impact, effort }\`.

Sort items by their value score descending. Value score = impact / effort.

Return the sorted array with a \`score\` field added to each item (rounded to 2 dp).`,
    starterCode: `function prioritizeBacklog(items) {
  // Your code here
}`,
    functionName: "prioritizeBacklog",
    testCases: [
      {
        args: [[{ title: "A", impact: 10, effort: 2 }, { title: "B", impact: 5, effort: 1 }]],
        expected: [{ title: "B", impact: 5, effort: 1, score: 5 }, { title: "A", impact: 10, effort: 2, score: 5 }],
        label: "tie sorted by score",
      },
      {
        args: [[{ title: "X", impact: 6, effort: 3 }, { title: "Y", impact: 8, effort: 2 }]],
        expected: [{ title: "Y", impact: 8, effort: 2, score: 4 }, { title: "X", impact: 6, effort: 3, score: 2 }],
        label: "sorted by score desc",
      },
    ],
    hint: "Map items to add score = parseFloat((impact/effort).toFixed(2)). Then sort by score descending.",
  },
  {
    id: 7,
    title: "A/B Test Significance",
    prompt: `Implement \`isSignificant(controlRate, variantRate, sampleSize)\`.

A simple rule: if the absolute difference between rates is >= 0.05 (5 percentage points) AND sampleSize >= 100, return true (statistically noteworthy).

Otherwise return false.`,
    starterCode: `function isSignificant(controlRate, variantRate, sampleSize) {
  // Your code here
}`,
    functionName: "isSignificant",
    testCases: [
      { args: [0.1, 0.16, 200], expected: true, label: "significant difference" },
      { args: [0.1, 0.12, 200], expected: false, label: "too small difference" },
      { args: [0.1, 0.2, 50], expected: false, label: "sample too small" },
    ],
    hint: "return Math.abs(variantRate - controlRate) >= 0.05 && sampleSize >= 100",
  },
  {
    id: 8,
    title: "Roadmap Milestone Tracker",
    prompt: `Implement \`roadmapProgress(milestones)\` where milestones is \`[{ title, done }]\`.

Return:
\`{ total, completed, percentage: "XX%" }\`

Percentage is rounded to the nearest integer.`,
    starterCode: `function roadmapProgress(milestones) {
  // Your code here
}`,
    functionName: "roadmapProgress",
    testCases: [
      { args: [[{ title: "a", done: true }, { title: "b", done: false }, { title: "c", done: true }]], expected: { total: 3, completed: 2, percentage: "67%" }, label: "2/3 done" },
      { args: [[{ title: "x", done: true }]], expected: { total: 1, completed: 1, percentage: "100%" }, label: "all done" },
    ],
    hint: "Filter for done:true to count completed. Percentage = Math.round(completed/total*100)+'%'.",
  },
  {
    id: 9,
    title: "NPS Score",
    prompt: `Implement \`npsScore(responses)\` where responses is an array of numbers 0-10.

NPS = % Promoters (9-10) - % Detractors (0-6). Passives (7-8) are ignored.

Return the NPS as an integer (Math.round).`,
    starterCode: `function npsScore(responses) {
  // Your code here
}`,
    functionName: "npsScore",
    testCases: [
      { args: [[10, 9, 7, 6, 3]], expected: 20, label: "npsScore: 2 promoters, 2 detractors" },
      { args: [[10, 10, 10]], expected: 100, label: "all promoters = 100" },
      { args: [[0, 0, 0]], expected: -100, label: "all detractors = -100" },
    ],
    hint: "promoters = responses.filter(r => r >= 9). detractors = filter(r => r <= 6). NPS = Math.round((P-D)/total*100).",
  },
  {
    id: 10,
    title: "User Segmentation",
    prompt: `Implement \`segmentUsers(users)\` where each user is \`{ name, daysActive, purchases }\`.

Assign segments:
- "champion": daysActive >= 30 AND purchases >= 5
- "loyal": daysActive >= 30 OR purchases >= 5
- "at-risk": daysActive < 7
- "new": otherwise

Return the users with a \`segment\` field added.`,
    starterCode: `function segmentUsers(users) {
  // Your code here
}`,
    functionName: "segmentUsers",
    testCases: [
      {
        args: [[{ name: "A", daysActive: 40, purchases: 6 }]],
        expected: [{ name: "A", daysActive: 40, purchases: 6, segment: "champion" }],
        label: "champion user",
      },
      {
        args: [[{ name: "B", daysActive: 2, purchases: 1 }]],
        expected: [{ name: "B", daysActive: 2, purchases: 1, segment: "at-risk" }],
        label: "at-risk user",
      },
    ],
    hint: "Map over users. Use if/else chain checking champion first, then loyal, then at-risk, else new.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export const TRACK_QUIZZES: TrackQuiz[] = [
  {
    slug: "software-engineering",
    tag: "SWE",
    title: "Software Engineering",
    icon: "⚙️",
    color: "#6EE7B7",
    questions: sweQuestions,
  },
  {
    slug: "frontend-engineering",
    tag: "FE",
    title: "Frontend Engineering",
    icon: "🎨",
    color: "#60A5FA",
    questions: feQuestions,
  },
  {
    slug: "backend-engineering",
    tag: "BE",
    title: "Backend Engineering",
    icon: "🗄️",
    color: "#A78BFA",
    questions: beQuestions,
  },
  {
    slug: "cybersecurity",
    tag: "SEC",
    title: "Cybersecurity",
    icon: "🔒",
    color: "#F87171",
    questions: secQuestions,
  },
  {
    slug: "artificial-intelligence",
    tag: "AI",
    title: "Artificial Intelligence",
    icon: "🤖",
    color: "#FBBF24",
    questions: aiQuestions,
  },
  {
    slug: "game-development",
    tag: "GAME",
    title: "Game Development",
    icon: "🎮",
    color: "#34D399",
    questions: gameQuestions,
  },
  {
    slug: "quality-assurance",
    tag: "QA",
    title: "Quality Assurance",
    icon: "✅",
    color: "#F472B6",
    questions: qaQuestions,
  },
  {
    slug: "product-management",
    tag: "PM",
    title: "Product Management",
    icon: "📊",
    color: "#FB923C",
    questions: pmQuestions,
  },
];