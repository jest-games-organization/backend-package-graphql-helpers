import { DecodedCursor } from '@jest-games-organization/backend-package-graphql-types';
import { DataObject } from '@jest-games-organization/backend-package-object-types';

/**
 * Verify the decoded cursor.
 * @param decodedCursor The decoded cursor.
 * @returns Success.
 */
export const verifyDecodedCursor = <Record extends DataObject>(decodedCursor: DecodedCursor<Record>): boolean => {
  // Deconstruct the decoded cursor.
  const { args, data } = decodedCursor;

  // Define the key type.
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

  // Return success.
  return true;
};
