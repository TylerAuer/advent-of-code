import { loadFileAsArrayOfLines } from './utils/file_utils';
import { countCharacterOccurences } from './utils/count_character_occurences';

export function solve2A(): number {
  const passwords = loadFileAsArrayOfLines('2_input.txt');

  let validPasswordCount = 0;

  passwords.forEach(password => {
    if (isValidPasswordByRange(password)) {
      validPasswordCount++;
    }
  });

  return validPasswordCount;
}

function isValidPasswordByRange(line: string): boolean {
  const [range, charWithColon, pword] = line.split(' ');

  const [min, max] = range.split('-').map(s => parseInt(s, 10));
  const char = charWithColon[0];
  const charCounts = countCharacterOccurences(pword);

  // Handle case where min is 0
  if (min === 0) {
    console.log('Need to handle case where char can be missing (occur 0 times)');
  }

  // Character never occurs
  if (!charCounts[char]) return false;

  const count = charCounts[char];

  if (count >= min && count <= max) {
    return true;
  } else {
    return false;
  }
}

export function solve2B() {
  const passwords = loadFileAsArrayOfLines('2_input.txt');

  let validPasswordCount = 0;

  passwords.forEach(password => {
    if (isValidPasswordByIndex(password)) {
      validPasswordCount++;
    }
  });

  return validPasswordCount;
}

function isValidPasswordByIndex(line: string): boolean {
  const [range, charWithColon, pword] = line.split(' ');
  const [leftIndex, rightIndex] = range.split('-').map(s => parseInt(s, 10));
  const char = charWithColon[0];

  // Right index out of range
  if (rightIndex > pword.length) return false;

  const isLeftIndexTheChar = pword[leftIndex - 1] === char;
  const isRightIndexTheChar = pword[rightIndex - 1] === char;

  const atLeastOneIndexIsChar = isLeftIndexTheChar || isRightIndexTheChar;
  const bothIndexesAreChar = isLeftIndexTheChar && isRightIndexTheChar;

  return atLeastOneIndexIsChar && !bothIndexesAreChar;
}
