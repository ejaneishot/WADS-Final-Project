import type { RoadmapTopic } from "../roadmaps";

export const backendEngineering: RoadmapTopic[] = [
  {
    slug: "java-fundamentals",
    title: "Java Fundamentals",
    icon: "☕",
    summary: "Syntax, types, and the structure of a Java program — the foundation for backend development.",
    lessons: [
      {
        slug: "print-hello-world",
        title: "Print, Hello World",
        body: [
          "Every Java program needs a class with a `main` method — the entry point the JVM looks for. `System.out.println` prints text followed by a newline.",
        ],
        code: { lang: "java", content: `class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}` },
        challenge: {
          language: "java",
          prompt: "Complete the main method so it prints exactly: Hello, World!",
          starterCode: `class Main {\n    public static void main(String[] args) {\n        // TODO: print "Hello, World!"\n    }\n}`,
          expectedOutput: "Hello, World!",
          hint: 'System.out.println("Hello, World!");',
        },
      },
      {
        slug: "variables-and-types",
        title: "Variables & Types",
        body: [
          "Java is statically typed — every variable's type is declared up front. `int` holds whole numbers, `String` holds text, `double` holds decimals.",
        ],
        code: { lang: "java", content: `int age = 28;\nString name = "Ada";\nSystem.out.println(name + " is " + age);` },
        challenge: {
          language: "java",
          prompt: 'Declare an int `age` set to 30 and a String `name` set to "Nova", then print "Nova is 30".',
          starterCode: `class Main {\n    public static void main(String[] args) {\n        // TODO: declare age and name, then print "Nova is 30"\n    }\n}`,
          expectedOutput: "Nova is 30",
          hint: 'System.out.println(name + " is " + age);',
        },
      },
      {
        slug: "methods",
        title: "Methods",
        body: [
          "A method is Java's term for a function attached to a class. `static` methods belong to the class itself rather than an instance.",
        ],
        code: { lang: "java", content: `public static double calculateAverage(int[] numbers) {\n    int sum = 0;\n    for (int n : numbers) sum += n;\n    return (double) sum / numbers.length;\n}` },
        challenge: {
          language: "java",
          prompt: "Complete `calculateAverage` so it returns the average of an int array, then run it on {85, 90, 78, 92} and print the result.",
          starterCode:
`class Main {
    public static double calculateAverage(int[] numbers) {
        // TODO: return the average of numbers as a double
        return 0;
    }

    public static void main(String[] args) {
        int[] scores = {85, 90, 78, 92};
        System.out.println(calculateAverage(scores));
    }
}`,
          expectedOutput: "86.25",
          hint: "Sum the array, then divide by numbers.length — cast to (double) so you don't get integer division.",
        },
      },
    ],
  },
  {
    slug: "java-oop",
    title: "Object-Oriented Programming in Java",
    icon: "🧩",
    summary: "Classes, objects, inheritance, and interfaces — how Java models real-world entities.",
    lessons: [
      {
        slug: "classes-and-objects",
        title: "Classes & Objects",
        body: [
          "A class is a blueprint; an object is an instance created from that blueprint. Classes bundle fields (data) and methods (behavior) together.",
        ],
        code: { lang: "java", content: `class User {\n    String name;\n    User(String name) { this.name = name; }\n}\n\nUser u = new User("Ada");\nSystem.out.println(u.name);` },
        challenge: {
          language: "java",
          prompt: 'Complete the User constructor so `new User("Nova").name` is "Nova", then print it.',
          starterCode:
`class Main {
    static class User {
        String name;
        User(String name) {
            // TODO: assign the parameter to this.name
        }
    }

    public static void main(String[] args) {
        User u = new User("Nova");
        System.out.println(u.name);
    }
}`,
          expectedOutput: "Nova",
          hint: "this.name = name;",
        },
      },
      {
        slug: "encapsulation",
        title: "Encapsulation",
        body: [
          "Fields are usually marked `private` and accessed through public getter methods, so the class controls how its data is read or changed.",
        ],
        challenge: {
          language: "java",
          prompt: "Complete the `getRole` getter so it returns the private `role` field.",
          starterCode:
`class Main {
    static class User {
        private String role;
        User(String role) { this.role = role; }
        public String getRole() {
            // TODO: return role
            return null;
        }
    }

    public static void main(String[] args) {
        User u = new User("admin");
        System.out.println(u.getRole());
    }
}`,
          expectedOutput: "admin",
          hint: "return role;",
        },
      },
      {
        slug: "inheritance-and-interfaces",
        title: "Inheritance & Interfaces",
        body: [
          "A class can `extend` another to reuse and specialize its behavior. Interfaces define a contract — methods a class promises to implement.",
        ],
        challenge: {
          language: "java",
          prompt: 'Complete `isAdmin` so it returns true when the user\'s role is "admin", then test it with a user whose role is "admin".',
          starterCode:
`class Main {
    static class User {
        private String role;

        public User(String role) {
            this.role = role;
        }

        public boolean isAdmin() {
            // TODO: return true if role equals "admin"
            return false;
        }
    }

    public static void main(String[] args) {
        User u = new User("admin");
        System.out.println(u.isAdmin());
    }
}`,
          expectedOutput: "true",
          hint: 'Use role.equals("admin").',
        },
      },
    ],
  },
  {
    slug: "databases-sql",
    title: "Databases & SQL",
    icon: "🗄️",
    summary: "Storing, querying, and relating data using relational databases.",
    lessons: [
      {
        slug: "what-is-a-database",
        title: "What is a Database",
        body: [
          "A relational database organizes data into tables — rows and columns, like a spreadsheet — with strict types and relationships between tables.",
        ],
        challenge: {
          language: "python",
          prompt: "`users` is a list of dicts representing table rows. Print the `name` of the user whose `id` is 2.",
          starterCode: `users = [\n    {"id": 1, "name": "Ada"},\n    {"id": 2, "name": "Sam"},\n]\n# TODO: print the name of the user with id == 2`,
          expectedOutput: "Sam",
          hint: "next(u['name'] for u in users if u['id'] == 2)",
        },
      },
      {
        slug: "select-and-where",
        title: "SELECT & WHERE",
        body: [
          "A SELECT query with a WHERE clause filters rows that match a condition — e.g. find every user whose plan is 'pro'.",
        ],
        challenge: {
          language: "python",
          prompt: 'Print a list of the names of all users whose `plan` is "pro".',
          starterCode: `users = [\n    {"name": "Ada", "plan": "pro"},\n    {"name": "Sam", "plan": "free"},\n    {"name": "Lee", "plan": "pro"},\n]\n# TODO: print a list of names where plan == "pro"`,
          expectedOutput: "['Ada', 'Lee']",
          hint: "[u['name'] for u in users if u['plan'] == 'pro']",
        },
      },
      {
        slug: "joins",
        title: "Joins",
        body: [
          "A JOIN combines rows from two tables based on a matching column — e.g. matching each order to the user who placed it.",
        ],
        challenge: {
          language: "python",
          prompt: "For each order, look up the user's name via `user_id` and print a list of names (one per order, in order).",
          starterCode: `users = {1: "Ada", 2: "Sam"}\norders = [{"id": 100, "user_id": 1}, {"id": 101, "user_id": 2}, {"id": 102, "user_id": 1}]\n# TODO: print a list of the user's name for each order, in order`,
          expectedOutput: "['Ada', 'Sam', 'Ada']",
          hint: "[users[o['user_id']] for o in orders]",
        },
      },
    ],
  },
  {
    slug: "backend-apis",
    title: "Building APIs",
    icon: "🔌",
    summary: "How clients and servers talk to each other over HTTP.",
    lessons: [
      {
        slug: "what-is-an-api",
        title: "What is an API",
        body: [
          "An API is a contract that lets one program request data or actions from another — typically over HTTP, exchanging JSON.",
        ],
        challenge: {
          language: "python",
          prompt: "`response` is a dict representing a JSON API response. Print the value of its `status` key.",
          starterCode: `response = {"status": "ok", "data": {"id": 1}}\n# TODO: print response["status"]`,
          expectedOutput: "ok",
          hint: 'response["status"]',
        },
      },
      {
        slug: "http-methods",
        title: "HTTP Methods",
        body: [
          "GET retrieves data, POST creates something new, PUT/PATCH update it, and DELETE removes it. The method describes the intent of the request.",
        ],
        challenge: {
          language: "python",
          prompt: 'A dict maps HTTP methods to their meaning. Print the value for the key "POST".',
          starterCode: `methods = {"GET": "read", "POST": "create", "DELETE": "remove"}\n# TODO: print methods["POST"]`,
          expectedOutput: "create",
          hint: 'methods["POST"]',
        },
      },
      {
        slug: "status-codes",
        title: "Status Codes",
        body: [
          "Status codes summarize the result: 2xx means success, 4xx means a client error (like 404 Not Found), 5xx means a server error.",
        ],
        challenge: {
          language: "python",
          prompt: "Given a list of status codes, print how many are client errors (in the 400-499 range).",
          starterCode: `codes = [200, 404, 201, 500, 403, 200]\n# TODO: print how many codes are between 400 and 499 inclusive`,
          expectedOutput: "2",
          hint: "sum(1 for c in codes if 400 <= c <= 499)",
        },
      },
    ],
  },
];
