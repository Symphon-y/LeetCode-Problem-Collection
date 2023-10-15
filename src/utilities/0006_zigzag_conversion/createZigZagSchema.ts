export const createZigZagSchema = (
  s: string,
  pattern: number[]
): { [key: string]: any } => {
  let objectCache: { [key: string]: any } = {};

  for (let i = 0; i < s.length; i++) {
    if (!objectCache[pattern[i]]) {
      objectCache[pattern[i]] = [];
    }
    objectCache[pattern[i]].push(s[i]);
  }
  return objectCache;
};
