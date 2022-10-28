import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { DataObject } from '@jest-games-organization/backend-package-object-types';

/**
 * Creates the global object identifier.
 * @param typename The typename.
 * @param data The data.
 * @param config The configuration.
 * @returns The global object identifier.
 */
export const createGlobalObjectIdentifier = (
  typename: string,
  data: DataObject,
  config: { encodeObject?: typeof encodeObject<any> } = { encodeObject },
): string => {
  // Get the handlers.
  const handleEncodeIdentifier = config.encodeObject || encodeObject;
  // Return the global object identifier.
  return handleEncodeIdentifier({ data, typename });
};
