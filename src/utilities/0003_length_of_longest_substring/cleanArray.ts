export const cleanArray = (arr: string[]): string[] => {
  let uniqueSubstrings: { [key: string]: string } = {};

  arr.forEach((substring) => {
    uniqueSubstrings[substring] = substring;
    //substring.length > 0 && (uniqueSubstrings[substring] = substring);
  });

  let noDuplicates = { ...uniqueSubstrings };

  Object.keys(uniqueSubstrings).forEach((substring) => {
    for (let i = 0; i < substring.length; i++) {
      for (let j = 1; j < substring.length; j++) {
        if (i !== j && substring[i] === substring[j]) {
          delete noDuplicates[substring];
        }
      }
    }
  });

  const cleanedArray = Object.keys(noDuplicates).sort((a, b) => {
    return b.length - a.length;
  });
  return cleanedArray;
};
