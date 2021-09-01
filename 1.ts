import { loadFileAsArrayOfLines } from './utils/file_utils';

const GOAL_SUM = 2020;

export function solve1A(): number | Error {
  const numbers = loadFileAsArrayOfLines('1_input.txt').map(line => parseInt(line, 10));
  const solutionPair = findPairWithSum(GOAL_SUM, numbers);

  if (solutionPair) return solutionPair[0] * solutionPair[1];
  else return new Error('No solution found');
}

export function solve1B(): number | Error {
  const sortedNums = loadFileAsArrayOfLines('1_input.txt').map(line => parseInt(line, 10));

  for (let i = 0; i < sortedNums.length; i++) {
    const smallest = sortedNums[i];
    const remaining = GOAL_SUM - smallest;
    const subPair = findPairWithSum(remaining, sortedNums.slice(i + 1));

    if (subPair) return smallest * subPair[0] * subPair[1];
  }
  return new Error('No solution found');
}

export function findPairWithSum(goalSum: number, arr: number[]): [number, number] | undefined {
  const history = new Set();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const pair = goalSum - num;

    if (history.has(pair)) {
      return [num, pair];
    } else {
      history.add(num);
    }
  }
}
