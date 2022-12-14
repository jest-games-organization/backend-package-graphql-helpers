import { ConnectionArgs, Edge, OrderByInput } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { createCursor } from './createCursor';
import { createEdge } from './createEdge';
import { createNode } from './createNode';

/**
 * Creates edges from the given records.
 * @param records The records to create edges from.
 * @param args The connection arguments.
 * @param config The configuration.
 * @returns The edges.
 */
export const createEdges = <Record extends DataObject, Node extends DataObject>(
  records: Record[],
  args: { orderBy: { [key in keyof Record]?: 'asc' | 'desc' }[] },
  config: {
    createCursor?: typeof createCursor<Record>;
    createEdge?: typeof createEdge<Record, Node>;
    createNode?: typeof createNode<Record, Node>;
    encodeObject?: typeof encodeObject;
  } = { createCursor, createEdge, createNode, encodeObject },
): Edge<Node>[] => {
  // Get the handlers.
  const handleCreateCursor = config.createCursor ?? createCursor;
  const handleCreateEdge = config.createEdge ?? createEdge;
  const handleCreateNode = config.createNode ?? createNode;
  const handleEncodeCursor = config.encodeObject ?? encodeObject;
  // Return the edges.
  return records.map((record) =>
    handleCreateEdge(record, args, {
      createCursor: handleCreateCursor,
      createNode: handleCreateNode,
      encodeObject: handleEncodeCursor,
    }),
  );
};
