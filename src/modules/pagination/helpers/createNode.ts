/**
 * Creates a node from the given record.
 * @param record The record to create a node from.
 * @returns The node.
 */
export const createNode = <Record extends { [key: string]: unknown }, Node extends { [key: string]: unknown }>(
  record: Record,
): Node => {
  // Return the node.
  return record as unknown as Node;
};
