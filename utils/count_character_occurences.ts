type CharacterCounts = { [key: string]: number };

export function countCharacterOccurences(s: string): CharacterCounts {
  const charCounts: CharacterCounts = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!charCounts[char]) {
      charCounts[char] = 1;
    } else {
      charCounts[char]++;
    }
  }

  return charCounts;
}
