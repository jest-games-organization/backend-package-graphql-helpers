import { DecodedGlobalObjectIdentifier } from '@jest-games-organization/backend-package-graphql-types';
import { decodeObject } from '@jest-games-organization/backend-package-object-helpers';

/**
 * Get the global object identifier typename.
 * @param globalObjectIdentifier The global object identifier.
 * @returns The global object identifier typename.
 */
export const getGlobalObjectIdentifierTypename = (
  globalObjectIdentifier: string,
): DecodedGlobalObjectIdentifier['typename'] => {
  // Decode the global object identifier.
  const { typename } = decodeObject<DecodedGlobalObjectIdentifier>(globalObjectIdentifier);
  // Return the typename.
  return typename;
};
