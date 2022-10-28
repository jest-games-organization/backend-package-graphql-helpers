import { DataObject } from '@jest-games-organization/backend-package-object-types';

/**
 * Creates a node from the given record.
 * @param record The record to create a node from.
 * @returns The node.
 */
export const createNode = <Record extends DataObject, Node extends DataObject>(record: Record): Node => {
  // Return the node.
  return record as any as Node;
};
