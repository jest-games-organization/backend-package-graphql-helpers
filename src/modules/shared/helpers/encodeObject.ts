/**
 * Encodes the given object.
 * @param decodedObject The decoded object.
 * @returns The encoded object.
 */
export const encodeObject = <O>(decodedObject: O): string => {
  // Return the encoded object.
  return Buffer.from(JSON.stringify(decodedObject)).toString('base64');
};
