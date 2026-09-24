import type { StackGroup } from "./types";

/**
 * Only list what has actually been used. Candidates to add once confirmed:
 * MCP, n8n, RAG, embeddings, vector search, webhooks, specific model APIs.
 */
export const stack: StackGroup[] = [
  {
    title: "AI / LLM",
    items: [
      "LLM APIs (DeepSeek)",
      "Structured output",
      "Prompt engineering",
      "Context engineering",
      "Coding agents: Claude Code, OpenAI Codex",
    ],
  },
  {
    title: "Agents & automation",
    items: ["Agent workflows", "Tool calling", "External API integrations", "Engineering workflow automation"],
  },
  {
    title: "Software engineering",
    items: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
      "Coroutines / Flow",
      "Flutter",
      "Ktor",
      "REST",
      "Firebase",
      "Git",
      "GitLab CI/CD",
    ],
  },
  {
    title: "Architecture",
    items: ["Modular architecture", "System design", "Asynchronous systems", "API integrations", "Automation workflows"],
  },
];
