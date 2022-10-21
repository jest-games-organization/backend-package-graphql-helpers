import { Connection, ConnectionArgs } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { createCursor } from './createCursor';
import { createEdge } from './createEdge';
import { createEdges } from './createEdges';
import { createNode } from './createNode';
import { createPageInfo } from './createPageInfo';

/**
 * Creates a connection from the given records.
 * @param records The records to create a connection from.
 * @param hasNextPage Whether there are more records after the last record in the connection.
 * @param hasPreviousPage Whether there are more records before the first record in the connection.
 * @param args The connection arguments.
 * @param config The configuration.
 * @returns The connection.
 */
export const createConnection = <Record extends { [key: string]: unknown }, Node extends { [key: string]: unknown }>(
  records: Record[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  args: ConnectionArgs<Node>,
  config: {
    createCursor?: typeof createCursor<Record, Node>;
    createEdge?: typeof createEdge<Record, Node>;
    createEdges?: typeof createEdges<Record, Node>;
    createNode?: typeof createNode<Record, Node>;
    createPageInfo?: typeof createPageInfo<Record, Node>;
    encodeObject?: typeof encodeObject;
  } = { createCursor, createEdge, createEdges, createNode, createPageInfo, encodeObject },
): Connection<Node> => {
  // Get the handlers.
  const handleCreateCursor = config.createCursor ?? createCursor;
  const handleCreateEdge = config.createEdge ?? createEdge;
  const handleCreateEdges = config.createEdges ?? createEdges;
  const handleCreateNode = config.createNode ?? createNode;
  const handleCreatePageInfo = config.createPageInfo ?? createPageInfo;
  const handleEncodeObject = config.encodeObject ?? encodeObject;
  // Create the edges.
  const edges = handleCreateEdges(records, args, {
    createCursor: handleCreateCursor,
    createEdge: handleCreateEdge,
    createNode: handleCreateNode,
    encodeObject: handleEncodeObject,
  });
  // Create the page info.
  const pageInfo = handleCreatePageInfo(records, hasNextPage, hasPreviousPage, args, {
    createCursor: handleCreateCursor,
    encodeObject: handleEncodeObject,
  });
  // Return the connection.
  return { edges, pageInfo };
};
