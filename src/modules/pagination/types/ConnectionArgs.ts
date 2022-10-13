import { FilterBy } from './FilterBy';
import { OrderBy } from './OrderBy';

export type ConnectionArgs<Record extends { [key: string]: unknown }> = {
  first?: number | null | undefined;
  after?: string | null | undefined;
  filterBy?: FilterBy<Record> | null | undefined;
  orderBy?: OrderBy<Record> | null | undefined;
};
