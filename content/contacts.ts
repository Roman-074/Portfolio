import type { ContactChannel } from "./types";

/**
 * Contact channels. Leave a value as null to hide it — the site never renders
 * empty or disabled links. The contact section disappears if all are null.
 */
const contacts = {
  /** e.g. "roman@example.com" */
  email: null as string | null,
  /** Telegram username without "@", e.g. "romanfedorov" */
  telegram: null as string | null,
  /** Public profile URL */
  linkedin: "https://www.linkedin.com/in/roman-fedorov-421a96205/" as string | null,
  /** Public profile URL */
  github: "https://github.com/Roman-074" as string | null,
};

export const contactChannels: ContactChannel[] = [
  contacts.email && {
    kind: "email" as const,
    label: "Email",
    value: contacts.email,
    href: `mailto:${contacts.email}`,
  },
  contacts.telegram && {
    kind: "telegram" as const,
    label: "Telegram",
    value: `@${contacts.telegram}`,
    href: `https://t.me/${contacts.telegram}`,
  },
  contacts.linkedin && {
    kind: "linkedin" as const,
    label: "LinkedIn",
    value: displayUrl(contacts.linkedin),
    href: contacts.linkedin,
  },
  contacts.github && {
    kind: "github" as const,
    label: "GitHub",
    value: displayUrl(contacts.github),
    href: contacts.github,
  },
].filter((channel): channel is ContactChannel => Boolean(channel));

function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
