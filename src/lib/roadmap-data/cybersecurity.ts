import type { RoadmapTopic } from "../roadmaps";

export const cybersecurity: RoadmapTopic[] = [
  {
    slug: "networking-fundamentals",
    title: "Networking Fundamentals",
    icon: "📡",
    summary: "IP addresses, ports, and how data travels between machines.",
    lessons: [
      {
        slug: "ip-addresses",
        title: "IP Addresses",
        body: [
          "Every device on a network has an IP address. IPv4 addresses are four numbers from 0-255 separated by dots, e.g. 192.168.1.1.",
        ],
        challenge: {
          language: "python",
          prompt: 'An IP address is stored as a string. Print the number of parts it has when split on ".".',
          starterCode: `ip = "192.168.1.1"\n# TODO: print the number of parts when ip is split on "."`,
          expectedOutput: "4",
          hint: 'len(ip.split("."))',
        },
      },
      {
        slug: "ports-and-services",
        title: "Ports & Services",
        body: [
          "A port number identifies a specific service on a host — e.g. 80 for HTTP, 443 for HTTPS, 22 for SSH.",
        ],
        challenge: {
          language: "python",
          prompt: "A dict maps port numbers to service names. Print the service running on port 443.",
          starterCode: `ports = {22: "SSH", 80: "HTTP", 443: "HTTPS"}\n# TODO: print ports[443]`,
          expectedOutput: "HTTPS",
          hint: "ports[443]",
        },
      },
      {
        slug: "packets-and-protocols",
        title: "Packets & Protocols",
        body: [
          "Data travels across networks in packets — small chunks with headers describing source, destination, and protocol (TCP, UDP, etc.).",
        ],
        challenge: {
          language: "python",
          prompt: 'Given a list of packet protocols, print how many are "TCP".',
          starterCode: `packets = ["TCP", "UDP", "TCP", "TCP", "UDP"]\n# TODO: print how many packets are "TCP"`,
          expectedOutput: "3",
          hint: 'packets.count("TCP")',
        },
      },
    ],
  },
  {
    slug: "linux-security-tools",
    title: "Linux & Security Tooling",
    icon: "🐧",
    summary: "The command line, permissions, and log analysis security work runs on.",
    lessons: [
      {
        slug: "essential-commands",
        title: "Essential Commands",
        body: [
          "A small set of commands covers most day-to-day work: `pwd`, `ls`, `cd`, `cat`, and pipes (`|`) to chain tools like `wc` (word count) together.",
        ],
        code: { lang: "bash", content: `echo "Linux is powerful" | wc -w` },
        challenge: {
          language: "bash",
          prompt: "The variable $text holds a sentence. Print the number of words in it using `wc -w`.",
          starterCode: `text="Linux is powerful"\n# TODO: print the number of words in $text using wc -w`,
          expectedOutput: "3",
          hint: 'echo $text | wc -w',
        },
      },
      {
        slug: "permissions",
        title: "File Permissions",
        body: [
          "File permissions control who can read, write, or execute a file. `chmod 600 key.pem` restricts a file to owner read/write only — common for private keys.",
        ],
        challenge: {
          language: "bash",
          prompt: 'The variable $perm holds a permission like "600". Print "private" if perm is "600", else print "shared".',
          starterCode: `perm="600"\n# TODO: print "private" if perm is "600", else "shared"`,
          expectedOutput: "private",
          hint: 'if [ "$perm" = "600" ]; then echo "private"; else echo "shared"; fi',
        },
      },
      {
        slug: "log-analysis",
        title: "Log Analysis",
        body: [
          "Security investigations often start with logs. `grep -c \"pattern\" file` counts how many lines match — useful for spotting repeated failed logins.",
        ],
        challenge: {
          language: "bash",
          prompt: 'The variable $log holds several lines from an auth log. Print the number of lines that contain the word "Failed".',
          starterCode: `log="ssh: Failed password for root
ssh: Accepted password for admin
ssh: Failed password for guest
ssh: Failed password for root"

# TODO: print the number of lines in $log containing "Failed"`,
          expectedOutput: "3",
          hint: 'echo "$log" | grep -c "Failed"',
        },
      },
    ],
  },
  {
    slug: "web-app-security",
    title: "Web Application Security (OWASP)",
    icon: "🛡️",
    summary: "The most common web vulnerabilities, and how to spot and prevent them.",
    lessons: [
      {
        slug: "sql-injection",
        title: "SQL Injection",
        body: [
          "If user input is concatenated directly into a SQL query, an attacker can manipulate the query itself. Parameterized queries keep input as data, never as code.",
        ],
        challenge: {
          language: "python",
          prompt: 'Given `user_input = "\' OR \'1\'=\'1"`, print whether the string "OR" appears in user_input — a classic SQL injection pattern.',
          starterCode: `user_input = "' OR '1'='1"\n# TODO: print whether "OR" is in user_input`,
          expectedOutput: "True",
          hint: '"OR" in user_input',
        },
      },
      {
        slug: "xss",
        title: "Cross-Site Scripting (XSS)",
        body: [
          "XSS happens when attacker-supplied content is rendered as HTML/JS in another user's browser. Escaping special characters like `<` and `>` prevents this.",
        ],
        challenge: {
          language: "python",
          prompt: 'Complete `escape_html(text)` so it replaces "<" with "&lt;" and ">" with "&gt;", then print escape_html("<script>").',
          starterCode: `def escape_html(text):\n    # TODO: replace < with &lt; and > with &gt;\n    pass\n\nprint(escape_html("<script>"))`,
          expectedOutput: "&lt;script&gt;",
          hint: 'text.replace("<", "&lt;").replace(">", "&gt;")',
        },
      },
      {
        slug: "broken-access-control",
        title: "Broken Access Control",
        body: [
          "Broken access control is when an app checks 'are you logged in?' but not 'are you allowed to access THIS resource?' — e.g. /orders/123 vs /orders/124.",
        ],
        challenge: {
          language: "python",
          prompt: "Given `order_owner` and `current_user`, print whether current_user is allowed to view the order (they must match).",
          starterCode: `order_owner = "ada@example.com"\ncurrent_user = "sam@example.com"\n# TODO: print whether current_user == order_owner`,
          expectedOutput: "False",
          hint: "print(current_user == order_owner)",
        },
      },
    ],
  },
  {
    slug: "ethical-hacking-basics",
    title: "Ethical Hacking Basics",
    icon: "🕵️",
    summary: "The mindset, methodology, and reporting behind authorized security testing.",
    lessons: [
      {
        slug: "the-ethical-hacking-mindset",
        title: "The Ethical Hacking Mindset",
        body: [
          "Ethical hacking means finding vulnerabilities WITH AUTHORIZATION, to fix them before attackers exploit them. Scope and consent are everything.",
        ],
        challenge: {
          language: "python",
          prompt: "A dict maps actions to whether they're authorized. Print a list of the action names that ARE authorized.",
          starterCode: `actions = {\n    "scan target with permission": True,\n    "scan random server": False,\n    "report findings": True,\n}\n# TODO: print a list of action names where the value is True`,
          expectedOutput: "['scan target with permission', 'report findings']",
          hint: "[a for a, ok in actions.items() if ok]",
        },
      },
      {
        slug: "reconnaissance",
        title: "Reconnaissance",
        body: [
          "Reconnaissance gathers public information about a target before testing — domains, open ports, technologies in use.",
        ],
        challenge: {
          language: "python",
          prompt: "Given a list of open ports, print a list of the ones considered risky if exposed (21, 23, 3389).",
          starterCode: `open_ports = [22, 21, 80, 23, 443, 3389]\nrisky = [21, 23, 3389]\n# TODO: print a list of open_ports that are also in risky`,
          expectedOutput: "[21, 23, 3389]",
          hint: "[p for p in open_ports if p in risky]",
        },
      },
      {
        slug: "reporting-findings",
        title: "Reporting Findings",
        body: [
          "A good vulnerability report includes severity, so teams can triage and fix the worst issues first.",
        ],
        challenge: {
          language: "python",
          prompt: "Given a list of (name, severity) tuples, print a list of just the names sorted from highest to lowest severity.",
          starterCode: `findings = [("XSS", 5), ("Outdated lib", 2), ("SQL Injection", 9)]\n# TODO: sort findings by severity descending, print a list of names`,
          expectedOutput: "['SQL Injection', 'XSS', 'Outdated lib']",
          hint: "sorted(findings, key=lambda f: f[1], reverse=True)",
        },
      },
    ],
  },
];
