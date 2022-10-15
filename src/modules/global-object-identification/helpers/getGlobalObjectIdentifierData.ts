import { decodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DecodedGlobalObjectIdentifier } from '@jest-games-organization/backend-package-graphql-types';

/**
 * Get the global object identifier data.
 * @param globalObjectIdentifier The global object identifier.
 * @returns The global object identifier data.
 */
export const getGlobalObjectIdentifierData = (
  globalObjectIdentifier: string,
): DecodedGlobalObjectIdentifier['data'] => {
  // Decode the global object identifier.
  const { data } = decodeObject<DecodedGlobalObjectIdentifier>(globalObjectIdentifier);
  // Return the data.
  return data;
};
