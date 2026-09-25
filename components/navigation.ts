import { contactChannels } from "../content/contacts";
import { profile } from "../content/profile";

export const hasContactSection = contactChannels.length > 0 || profile.resumeUrl !== null;

export type NavItem = { id: string; label: string; index: string };

/** Sections in page order. `index` is the number shown in each section's eyebrow. */
export const navigation: NavItem[] = [
  { id: "projects", label: "Work", index: "01" },
  { id: "background", label: "Background", index: "02" },
  { id: "approach", label: "Method", index: "03" },
  ...(hasContactSection ? [{ id: "contact", label: "Contact", index: "04" }] : []),
];

export function sectionIndex(id: string): string {
  return navigation.find((item) => item.id === id)?.index ?? "";
}
