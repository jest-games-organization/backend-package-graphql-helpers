import { DecodedCursor } from '@jest-games-organization/backend-package-graphql-types';
import { decodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { verifyDecodedCursor } from './verifyDecodedCursor';

/**
 * Decode the cursor.
 * @param cursor The cursor to decode.
 * @returns The decoded cursor.
 */
export const decodeCursor = <Record extends { [key: string]: unknown }>(cursor: string): DecodedCursor<Record> => {
  // Decode the cursor.
  const decodedCursor = decodeObject<DecodedCursor<Record>>(cursor);

  // Verify the decoded cursor.
  verifyDecodedCursor(decodedCursor);

  // Return the decoded cursor.
  return decodedCursor;
};
