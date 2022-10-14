import { Edge } from './Edge';
import { PageInfo } from '../../shared/types/PageInfo';

export type Connection<Node extends { [key: string]: unknown }> = {
  edges: Edge<Node>[];
  pageInfo: PageInfo;
};
