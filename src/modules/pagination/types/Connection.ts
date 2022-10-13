import { Edge } from './Edge';
import { PageInfo } from './PageInfo';

export type Connection<Node extends { [key: string]: unknown }> = {
  edges: Edge<Node>[];
  pageInfo: PageInfo;
};
