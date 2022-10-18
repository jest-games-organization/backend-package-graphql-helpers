import { DecodedCursor } from '@jest-games-organization/backend-package-graphql-types';
import { decodeObject } from '@jest-games-organization/backend-package-object-helpers';

/**
 * Decode the cursor.
 * @param cursor The cursor to decode.
 * @returns The decoded cursor.
 */
export const decodeCursor = <Record extends { [key: string]: unknown }>(cursor: string): DecodedCursor<Record> => {
  // Decode the cursor.
  const { args, data } = decodeObject<DecodedCursor<Record>>(cursor);

  // Define the Key type.
  type Key = keyof Record;

  // Get the order by keys.
  const orderByKeys: Key[] = args.orderBy.map((o) => Object.keys(o)[0]).sort();

  // Get the data keys.
  const dataKeys: Key[] = Object.keys(data).sort();

  // Check if there are order by keys, if not throw an error.
  if (orderByKeys.length === 0) {
    throw new Error('The cursor is invalid: order by keys not found.');
  }

  // Check if there are data keys, if not throw an error.
  if (dataKeys.length === 0) {
    throw new Error('The cursor is invalid: data keys not found.');
  }

  // Check if the order by keys length and data keys length are the same, if not throw an error.
  if (orderByKeys.length !== dataKeys.length) {
    throw new Error('The cursor is invalid: the number of order by and data keys do not match.');
  }

  // Check if the order by keys and date keys are the same, if not throw an error.
  if (orderByKeys.join(',') !== dataKeys.join(',')) {
    throw new Error('The cursor is invalid: the order by and data keys do not match.');
  }

  // Return the decoded cursor.
  return { args, data };
};
