import { encodeObject } from '../../shared/helpers/encodeObject';

/**
 * Creates the global object identifier.
 * @param typename The typename.
 * @param data The data.
 * @param config The configuration.
 * @returns The global object identifier.
 */
export const createGlobalObjectIdentifier = (
  typename: string,
  data: { [key: string]: unknown },
  config: { encodeObject?: typeof encodeObject<unknown> } = { encodeObject },
): string => {
  // Get the handlers.
  const handleEncodeIdentifier = config.encodeObject || encodeObject;
  // Return the global object identifier.
  return handleEncodeIdentifier({ data, typename });
};
