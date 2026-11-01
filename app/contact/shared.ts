export type ContactField = "name" | "email" | "topic" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};

export const TOPICS = ["General", "Technology strategy & AI", "TeamMate", "Speaking or writing", "Football"] as const;
