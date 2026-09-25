import type { StackGroup } from "./types";

/**
 * Grouped by where it is used. Only list what has actually been used.
 * Candidates to add once confirmed: MCP, n8n, RAG, embeddings, vector search,
 * webhooks, specific DI library, other model APIs.
 */
export const stack: StackGroup[] = [
  {
    title: "Mobile",
    items: ["Kotlin", "Android", "Jetpack Compose", "Flutter"],
  },
  {
    title: "Architecture",
    items: ["Modularization", "Coroutines / Flow", "DI", "REST · Ktor", "System design"],
  },
  {
    title: "AI & automation",
    items: [
      "LLM APIs (DeepSeek)",
      "Structured output",
      "Prompt & context engineering",
      "Tool calling · agent workflows",
      "Claude Code · OpenAI Codex",
    ],
  },
  {
    title: "Delivery",
    items: ["Git", "GitLab CI/CD", "Firebase", "Jira / YouTrack integrations"],
  },
];
