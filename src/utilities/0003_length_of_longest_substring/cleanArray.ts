import { isUnique } from './isUnique.ts';

export const cleanArray = (arr: string[]): string[] => {
  // Create a set to store unique substrings
  const uniqueSubstrings = new Set<string>();

  for (const substring of arr) {
    // Check for duplicate letters/values in the substring
    if (isUnique(substring)) {
      uniqueSubstrings.add(substring);
    }
  }

  // Convert the set back to an array and sort it by length
  const cleanedArray = Array.from(uniqueSubstrings).sort(
    (a, b) => b.length - a.length
  );

  return cleanedArray;
};
