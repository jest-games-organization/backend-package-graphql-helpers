import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DataObject } from '@jest-games-organization/backend-package-object-types';

/**
 * Creates a cursor from the given record.
 * @param record The record to create a cursor from.
 * @param args The connection arguments.
 * @param config The configuration.
 * @returns The cursor.
 */
export const createCursor = <Record extends DataObject>(
  record: Record,
  args: { orderBy: { [key in keyof Record]?: 'asc' | 'desc' }[] },
  config: {
    encodeObject?: typeof encodeObject;
  } = { encodeObject },
): string => {
  // Get the handlers.
  const handleEncodeObject = config.encodeObject || encodeObject;

  // Get the cursor fields.
  const orderByKeys = args.orderBy.map((option) => Object.keys(option)[0]);
  const entries = Object.entries(record).filter(([key]) => orderByKeys.includes(key));
  const data = Object.fromEntries(entries);

  // Return the cursor.
  return handleEncodeObject({ data, args });
};
