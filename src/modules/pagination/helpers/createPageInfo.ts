import { ConnectionArgs, PageInfo } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { createCursor } from './createCursor';

/**
 *
 * @param records The records to create page info from.
 * @param hasNextPage Whether there are more records after the last record in the connection.
 * @param hasPreviousPage Whether there are more records before the first record in the connection.
 * @param args The connection arguments.
 * @param config The configuration.
 * @returns The page info.
 */
export const createPageInfo = <Record extends DataObject>(
  records: Record[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  args: ConnectionArgs<Record>,
  config: {
    createCursor?: typeof createCursor<Record>;
    encodeObject?: typeof encodeObject;
  } = { createCursor, encodeObject },
): PageInfo => {
  // Get the handlers.
  const handleCreateCursor = config.createCursor ?? createCursor;
  const handleEncodeCursor = config.encodeObject ?? encodeObject;
  // Create the start cursor.
  const startRecord = records[0];
  const startCursor = startRecord ? handleCreateCursor(startRecord, args, { encodeObject: handleEncodeCursor }) : '';
  const endRecord = records[records.length - 1];
  // Create the end cursor.
  const endCursor = endRecord ? handleCreateCursor(endRecord, args, { encodeObject: handleEncodeCursor }) : '';
  // Return the page info.
  return { hasNextPage, hasPreviousPage, startCursor, endCursor };
};
