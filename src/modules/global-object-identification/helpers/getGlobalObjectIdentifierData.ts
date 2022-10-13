import { decodeObject } from '../../shared/helpers/decodeObject';
import { DecodedGlobalObjectIdentifier } from '../types/DecodedGlobalObjectIdentifier';

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
