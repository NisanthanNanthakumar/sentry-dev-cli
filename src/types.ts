export type AnalyticsAttribute = {
  name: string;
  type: "string" | "integer";
  required: boolean;
};

export type AnalyticsGeneratorOptions = {
  fileName: string;
  event: string;
  attributes: AnalyticsAttribute[];
};
