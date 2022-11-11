import { DecodedCursor, SortOrder } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { encodeCursor } from '../../helpers/encodeCursor';

describe('GIVEN the encodeCursor method', () => {
  let decodedCursor: DecodedCursor<{ id: string; a?: string }>;

  beforeEach(() => {
    decodedCursor = {
      data: { id: 'mockId' },
      args: { orderBy: [{ id: 'asc' }] },
    };
  });

  test('THEN it should return a cursor', () => {
    const response = encodeCursor(decodedCursor);
    const expected = encodeObject(decodedCursor);
    expect(response).toBe(expected);
  });
});
