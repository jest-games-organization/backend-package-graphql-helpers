import { decodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DecodedCursor } from '../types';

/**
 * Decode the cursor.
 * @param cursor The cursor to decode.
 * @returns The decoded cursor.
 */
export const decodeCursor = <Record extends { [key: string]: unknown }>(cursor: string): DecodedCursor<Record> => {
  // Return the decoded cursor.
  return decodeObject<DecodedCursor<Record>>(cursor);
};
