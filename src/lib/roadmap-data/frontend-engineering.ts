import type { RoadmapTopic } from "../roadmaps";

export const frontendEngineering: RoadmapTopic[] = [
  {
    slug: "html-fundamentals",
    title: "HTML Essentials",
    icon: "🌐",
    summary: "The markup language that structures every web page.",
    lessons: [
      {
        slug: "html-structure",
        title: "Tags & Elements",
        body: [
          "HTML structures content with elements made of opening and closing tags, like `<h1>Title</h1>`. Whatever's between the tags is the element's content.",
        ],
        code: { lang: "javascript", content: `function wrapInTag(text, tag) {\n  return \`<${"${tag}"}>${"${text}"}</${"${tag}"}>\`;\n}\nconsole.log(wrapInTag("Hello", "h1"));` },
        challenge: {
          language: "javascript",
          prompt: 'Complete `wrapInTag(text, tag)` so it returns `<tag>text</tag>`, then print wrapInTag("Hello", "h1").',
          starterCode: `function wrapInTag(text, tag) {\n  // TODO: return \`<\${tag}>\${text}</\${tag}>\`\n}\n\nconsole.log(wrapInTag("Hello", "h1"));`,
          expectedOutput: "<h1>Hello</h1>",
          hint: "Use a template literal: `<${tag}>${text}</${tag}>`",
        },
      },
      {
        slug: "attributes",
        title: "Attributes",
        body: [
          "Attributes add extra information to a tag, written as `name=\"value\"` inside the opening tag — e.g. an `<a>` link needs an `href` attribute to know where it points.",
        ],
        code: { lang: "html", content: `<a href="https://example.com">Docs</a>` },
        challenge: {
          language: "javascript",
          prompt: 'Complete `link(text, url)` so it returns `<a href="url">text</a>`, then print link("Docs", "https://example.com").',
          starterCode: `function link(text, url) {\n  // TODO: return \`<a href="\${url}">\${text}</a>\`\n}\n\nconsole.log(link("Docs", "https://example.com"));`,
          expectedOutput: `<a href="https://example.com">Docs</a>`,
          hint: 'Return `<a href="${url}">${text}</a>`',
        },
      },
      {
        slug: "semantic-elements",
        title: "Semantic Elements",
        body: [
          "Semantic tags like `<header>`, `<nav>`, `<main>`, and `<footer>` describe the meaning of content, not just its appearance — helping browsers, search engines, and screen readers understand the page.",
        ],
        challenge: {
          language: "javascript",
          prompt: 'A `purposes` object maps semantic tag names to their role. Print the value for the key "nav".',
          starterCode: `const purposes = {\n  header: "intro and branding",\n  nav: "navigation links",\n  main: "primary content",\n  footer: "footer info",\n};\n\n// TODO: print purposes["nav"]`,
          expectedOutput: "navigation links",
          hint: 'console.log(purposes["nav"])',
        },
      },
    ],
  },
  {
    slug: "css-fundamentals",
    title: "CSS & Layout",
    icon: "🎨",
    summary: "Styling, the box model, and laying out elements with flexbox.",
    lessons: [
      {
        slug: "selectors-and-declarations",
        title: "Selectors & Declarations",
        body: [
          "A CSS rule pairs a selector (what to style) with declarations (how to style it): `selector { property: value; }`.",
        ],
        code: { lang: "css", content: `.btn {\n  color: red;\n}` },
        challenge: {
          language: "javascript",
          prompt: 'Complete `rule(selector, prop, value)` so it returns `selector { prop: value; }`, then print rule(".btn", "color", "red").',
          starterCode: `function rule(selector, prop, value) {\n  // TODO: return \`\${selector} { \${prop}: \${value}; }\`\n}\n\nconsole.log(rule(".btn", "color", "red"));`,
          expectedOutput: ".btn { color: red; }",
          hint: "Return `${selector} { ${prop}: ${value}; }`",
        },
      },
      {
        slug: "box-model",
        title: "The Box Model",
        body: [
          "Every element is a box made of content, padding, border, and margin. An element's total visible width is its content width plus padding and border on both sides.",
        ],
        challenge: {
          language: "javascript",
          prompt: "Complete `totalWidth(content, padding, border)` so it returns content + 2*padding + 2*border, then print totalWidth(200, 10, 2).",
          starterCode: `function totalWidth(content, padding, border) {\n  // TODO: return content + 2 * padding + 2 * border\n}\n\nconsole.log(totalWidth(200, 10, 2));`,
          expectedOutput: "224",
          hint: "content + 2 * padding + 2 * border",
        },
      },
      {
        slug: "flexbox-layout",
        title: "Flexbox Layout",
        body: [
          "Flexbox arranges children of a container in a row or column. `justify-content: center` centers items along the main axis — one of the most common layout fixes in CSS.",
        ],
        challenge: {
          language: "javascript",
          prompt: 'A `flexProps` object maps layout intents to their CSS declaration. Print the value for the key "center".',
          starterCode: `const flexProps = {\n  center: "justify-content: center",\n  start: "justify-content: flex-start",\n  spaced: "justify-content: space-between",\n};\n\n// TODO: print flexProps["center"]`,
          expectedOutput: "justify-content: center",
          hint: 'console.log(flexProps["center"])',
        },
      },
    ],
  },
  {
    slug: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    icon: "⚡",
    summary: "Variables, functions, and the array methods modern frontends are built on.",
    lessons: [
      {
        slug: "print-hello-world",
        title: "console.log, Hello World",
        body: [
          "JavaScript is the only language browsers run natively. `console.log()` prints a value — your first tool for seeing what your code is doing.",
        ],
        code: { lang: "javascript", content: `console.log("Hello, World!");` },
        challenge: {
          language: "javascript",
          prompt: "Use console.log() to output exactly: Hello, World!",
          starterCode: `// TODO: print "Hello, World!"`,
          expectedOutput: "Hello, World!",
          hint: 'console.log("Hello, World!")',
        },
      },
      {
        slug: "variables-and-types",
        title: "Variables & Types",
        body: [
          "Use `let` and `const` to declare variables (`const` for values that won't be reassigned). Template literals (backtick strings with `${...}`) embed variables inside strings.",
        ],
        code: { lang: "javascript", content: `const name = "Ada";\nlet score = 90;\nconsole.log(\`${"${name}"} scored ${"${score}"}\`);` },
        challenge: {
          language: "javascript",
          prompt: 'Create a const `name` set to "Nova" and a let `score` set to 95, then print "Nova scored 95" using a template literal.',
          starterCode: `// TODO: declare name and score, then print "Nova scored 95"`,
          expectedOutput: "Nova scored 95",
          hint: "console.log(`${name} scored ${score}`)",
        },
      },
      {
        slug: "array-methods",
        title: "Array Methods",
        body: [
          "`map`, `filter`, and `reduce` transform lists of data without writing manual loops — the pattern frameworks like React rely on constantly.",
        ],
        code: { lang: "javascript", content: `const users = [\n  { name: "Ada", role: "admin" },\n  { name: "Sam", role: "student" },\n];\nconst admins = users.filter(u => u.role === "admin").map(u => u.name);` },
        challenge: {
          language: "javascript",
          prompt: 'Complete `getAdminNames` so it returns an array of names for every user whose role is "admin", then print the result as JSON.',
          starterCode: `const users = [\n  { name: "Ada", role: "admin" },\n  { name: "Sam", role: "student" },\n  { name: "Lee", role: "admin" },\n];\n\nfunction getAdminNames(users) {\n  // TODO: use filter + map to return an array of admin names\n  return [];\n}\n\nconsole.log(JSON.stringify(getAdminNames(users)));`,
          expectedOutput: `["Ada","Lee"]`,
          hint: 'users.filter(u => u.role === "admin").map(u => u.name)',
        },
      },
    ],
  },
  {
    slug: "react-fundamentals",
    title: "React Basics",
    icon: "⚛️",
    summary: "Components, props, and state — how modern frontends are built.",
    lessons: [
      {
        slug: "components-and-jsx",
        title: "Components",
        body: [
          "A component is a function that returns what should be rendered. JSX is HTML-like syntax that compiles down to plain JavaScript function calls.",
        ],
        code: { lang: "jsx", content: `function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}` },
        challenge: {
          language: "javascript",
          prompt: 'A component is just a function that returns output for given input. Complete `Greeting(name)` so it returns "Hello, {name}!", then print Greeting("Ada").',
          starterCode: `function Greeting(name) {\n  // TODO: return \`Hello, \${name}!\`\n}\n\nconsole.log(Greeting("Ada"));`,
          expectedOutput: "Hello, Ada!",
          hint: "Return `Hello, ${name}!`",
        },
      },
      {
        slug: "props",
        title: "Props",
        body: [
          "Props are how a parent passes data down to a child component — similar to function arguments. They're read-only from the child's perspective.",
        ],
        code: { lang: "jsx", content: `function Badge({ label, count }) {\n  return <span>{label}: {count}</span>;\n}` },
        challenge: {
          language: "javascript",
          prompt: 'Complete `Badge(props)` so it returns "label: count", then print Badge({ label: "Score", count: 42 }).',
          starterCode: `function Badge(props) {\n  // TODO: return \`\${props.label}: \${props.count}\`\n}\n\nconsole.log(Badge({ label: "Score", count: 42 }));`,
          expectedOutput: "Score: 42",
          hint: "Return `${props.label}: ${props.count}`",
        },
      },
      {
        slug: "state-and-updates",
        title: "State & Updates",
        body: [
          "State is data a component owns and can change over time. React re-renders when state changes — but updates must create a NEW object rather than mutating the old one.",
        ],
        challenge: {
          language: "javascript",
          prompt: "Complete `increment(state)` so it returns a NEW object with `count` one higher, without mutating the original. Print JSON.stringify(increment({ count: 5 })).",
          starterCode: `function increment(state) {\n  // TODO: return a new object with count incremented by 1\n  return state;\n}\n\nconsole.log(JSON.stringify(increment({ count: 5 })));`,
          expectedOutput: `{"count":6}`,
          hint: "return { ...state, count: state.count + 1 }",
        },
      },
    ],
  },
];
