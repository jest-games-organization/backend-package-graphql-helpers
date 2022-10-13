export type OrderBy<Record extends { [key: string]: unknown }> = {
  [key in keyof Record]?: 'asc' | 'desc';
}[];
