export type Edge<Node extends { [key: string]: unknown }> = {
  cursor: string;
  node: Node;
};
