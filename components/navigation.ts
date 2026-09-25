import { contactChannels } from "../content/contacts";
import { profile } from "../content/profile";

export const hasContactSection = contactChannels.length > 0 || profile.resumeUrl !== null;

export type NavItem = { id: string; label: string };

export const navigation: NavItem[] = [
  { id: "projects", label: "Projects" },
  { id: "approach", label: "Approach" },
  { id: "stack", label: "Stack" },
  { id: "background", label: "Background" },
  ...(hasContactSection ? [{ id: "contact", label: "Contact" }] : []),
];
