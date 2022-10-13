export type FilterBy<Record extends { [key: string]: unknown }> = {
  [key in keyof Record]?: unknown;
} & {
  AND?: FilterBy<Record>[];
  OR?: FilterBy<Record>[];
  NOT?: FilterBy<Record>[];
};
