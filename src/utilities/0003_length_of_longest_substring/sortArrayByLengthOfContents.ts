export const cleanArray = (arr: string[]): string[] => {
  let uniqueSubstrings: { [key: string]: string } = {};

  arr.forEach((substring) => {
    substring.length > 0 && (uniqueSubstrings[substring] = substring);
  });

  let noDubplicates = { ...uniqueSubstrings };

  Object.keys(uniqueSubstrings).forEach((substring) => {
    for (let i = 0; i < substring.length; i++) {
      for (let j = 1; j < substring.length; j++) {
        if (substring[i] === substring[j]) {
          delete noDubplicates[substring];
        }
      }
    }
  });
  console.log(
    Object.keys(uniqueSubstrings)
      .sort((a, b) => {
        return a.length - b.length;
      })
      .reverse()
  );
  const cleanedArray = Object.keys(noDubplicates)
    .sort((a, b) => {
      return a.length - b.length;
    })
    .reverse();
  return cleanedArray;
};
