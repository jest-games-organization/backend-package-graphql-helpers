import { Nullable } from '@jest-games-organization/backend-package-object-helpers';
import { Scalars } from './Scalars';

export type FilterByBoolean = {
  equals?: Nullable<Scalars['Boolean']>;
  not?: Nullable<Scalars['Boolean']>;
};
