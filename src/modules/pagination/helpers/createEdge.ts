import { ConnectionArgs, Edge, OrderByInput } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { createCursor } from './createCursor';
import { createNode } from './createNode';

/**
 * Creates an edge from the given record.
 * @param record The record to create an edge from.
 * @param args The connection arguments.
 * @param config The configuration.
 * @returns The edge.
 */
export const createEdge = <Record extends DataObject, Node extends DataObject>(
  record: Record,
  args: { orderBy: { [key in keyof Record]?: 'asc' | 'desc' }[] },
  config: {
    createCursor?: typeof createCursor<Record>;
    createNode?: typeof createNode<Record, Node>;
    encodeObject?: typeof encodeObject;
  } = { createCursor, createNode, encodeObject },
): Edge<Node> => {
  // Get the handlers.
  const handleCreateCursor = config.createCursor || createCursor;
  const handleCreateNode = config.createNode || createNode;
  const handleEncodeObject = config.encodeObject || encodeObject;
  // Create the cursor.
  const cursor = handleCreateCursor(record, args, { encodeObject: handleEncodeObject });
  // Create the node.
  const node = handleCreateNode(record);
  // Return the edge.
  return { cursor, node };
};
