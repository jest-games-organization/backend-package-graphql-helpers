/**
 * Decodes the given object.
 * @param encodedObject The encoded object.
 * @returns The decoded object.
 */
export const decodeObject = <O>(encodedObject: string): O => {
  // Return the decoded object.
  return JSON.parse(Buffer.from(encodedObject, 'base64').toString());
};
