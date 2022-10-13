import { ConnectionArgs } from './ConnectionArgs';

export type DecodedCursor<Record extends { [key: string]: unknown }> = {
  data: { [key in keyof Record]: Record[key] };
  args: ConnectionArgs<Record>;
};
