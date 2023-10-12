export const isUnique = (str: string): boolean => {
  const charSet = new Set<string>();

  for (const char of str) {
    if (charSet.has(char)) {
      return false; // Found a duplicate
    }
    charSet.add(char);
  }

  return true; // No duplicates found
};
