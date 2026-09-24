import { contactChannels } from "../content/contacts";
import { profile } from "../content/profile";

export const hasContactSection = contactChannels.length > 0 || profile.resumeUrl !== null;

export type NavItem = { id: string; label: string; index: string };

/** Sections in page order. `index` is the § number shown in the margin and in the nav. */
export const navigation: NavItem[] = [
  { id: "projects", label: "Work", index: "1" },
  { id: "background", label: "Background", index: "2" },
  { id: "approach", label: "Method", index: "3" },
  ...(hasContactSection ? [{ id: "contact", label: "Contact", index: "4" }] : []),
];

export function sectionIndex(id: string): string {
  return navigation.find((item) => item.id === id)?.index ?? "";
}
