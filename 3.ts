import { loadFileAsArrayOfLines } from './utils/file_utils';

export function solve3A(): number {
  return slopeFollower(loadFileAsArrayOfLines('3_input.txt'), 3, 1);
}

export function solve3B(): number {
  const lines = loadFileAsArrayOfLines('3_input.txt');

  return [
    [1, 1], // right 1, down 1
    [3, 1], // right 3, down 1
    [5, 1],
    [7, 1],
    [1, 2],
  ]
    .map(args => slopeFollower(lines, args[0], args[1])) // get the tree count
    .reduce((acc, curr) => acc * curr); // multiply the results
}

function slopeFollower(lines: string[], rightMovement: number, downMovement: number): number {
  let treeCount = 0;
  let col = 0;
  let row = 0;
  let rowLength = lines.length;
  let colLength = lines[0].length;

  while (row < rowLength) {
    const currSpot = lines[row][col];
    if (currSpot === '#') treeCount++;
    col = (col + rightMovement) % colLength;
    row += downMovement;
  }

  return treeCount;
}
