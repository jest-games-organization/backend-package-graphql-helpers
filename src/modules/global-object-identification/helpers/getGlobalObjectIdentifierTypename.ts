import { decodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DecodedGlobalObjectIdentifier } from '../types/DecodedGlobalObjectIdentifier';

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
