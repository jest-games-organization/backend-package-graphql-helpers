import { Nullable } from '@jest-games-organization/backend-package-object-helpers';
import { Scalars } from './Scalars';

export type FilterByDate = {
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  not?: Nullable<Scalars['String']>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
};
