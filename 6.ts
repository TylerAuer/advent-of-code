import { countCharacterOccurences } from './utils/count_character_occurences';
import { loadFileAsArrayOfSplitOnBlankLines } from './utils/file_utils';
import { log } from './utils/log';

export function solve6A(): number {
  const groups = loadFileAsArrayOfSplitOnBlankLines('6_input.txt');

  let sum = 0;

  groups.forEach(group => {
    const chars = new Set();
    group
      .replace(/\s*/g, '')
      .split('')
      .forEach(char => chars.add(char));

    sum += chars.size;
  });

  return sum;
}

export function solve6B() {
  const groups = loadFileAsArrayOfSplitOnBlankLines('6_input.txt');

  let sum = 0;

  groups.forEach(group => {
    const answerSetCount = group.split('\n').length;
    const answers = group.replace(/\s*/g, '');
    const charCounts = countCharacterOccurences(answers);

    let answerCount = 0;
    Object.values(charCounts).forEach(count => {
      if (count === answerSetCount) {
        answerCount++;
      }
    });
    sum += answerCount;
  });

  return sum;
}
