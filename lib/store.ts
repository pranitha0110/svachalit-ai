export type Lead = {
  name: string;
  company: string;
  budget: string;
  intent: string;
  urgency: string;
  sentiment: string;
  score: number;
};

export const leads: Lead[] = [];