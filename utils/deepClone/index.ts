/**
 * Deep clones a source object and returns a copy.
 *
 * @param sourceObject The source object to be copied.
 * @returns Copy of the object.
 */
const deepClone = <SourceObjectType>(
  sourceObject: SourceObjectType
): SourceObjectType => {
  return JSON.parse(JSON.stringify(sourceObject)) as SourceObjectType;
};

export default deepClone;
