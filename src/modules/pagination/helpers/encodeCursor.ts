import { DecodedCursor } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { verifyDecodedCursor } from './verifyDecodedCursor';

/**
 * Encode the cursor.
 * @param decodedCursor The decoded cursor.
 * @returns The encoded cursor.
 */
export const encodeCursor = <Record extends { [key: string]: any }>(decodedCursor: DecodedCursor<Record>): string => {
  // Verify the decoded cursor.
  verifyDecodedCursor(decodedCursor);

  // Return the encoded cursor.
  return encodeObject(decodedCursor);
};
