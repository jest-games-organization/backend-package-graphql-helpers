import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { ConnectionArgs } from '../types/ConnectionArgs';
import { PageInfo } from '../../shared/types/PageInfo';
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
export const createPageInfo = <Record extends { [key: string]: unknown }>(
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
  const startCursor = handleCreateCursor(startRecord, args, { encodeObject: handleEncodeCursor });
  const endRecord = records[records.length - 1];
  // Create the end cursor.
  const endCursor = handleCreateCursor(endRecord, args, { encodeObject: handleEncodeCursor });
  // Return the page info.
  return { hasNextPage, hasPreviousPage, startCursor, endCursor };
};
