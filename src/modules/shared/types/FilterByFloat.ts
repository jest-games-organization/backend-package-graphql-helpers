import { Nullable } from '@jest-games-organization/backend-package-object-helpers';
import { Scalars } from './Scalars';

export type FilterByFloat = {
  equals?: Nullable<Scalars['Float']>;
  gt?: Nullable<Scalars['Float']>;
  gte?: Nullable<Scalars['Float']>;
  in?: Nullable<Array<Nullable<Scalars['Float']>>>;
  lt?: Nullable<Scalars['Float']>;
  lte?: Nullable<Scalars['Float']>;
  not?: Nullable<Scalars['Float']>;
  notIn?: Nullable<Array<Nullable<Scalars['Float']>>>;
};
