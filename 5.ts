import { loadFileAsArrayOfLines } from './utils/file_utils';

type BinaryPartition = 'left' | 'right';

export function solve5A(): number {
  const passes = loadFileAsArrayOfLines('5_input.txt');
  let max = -Infinity;

  passes.forEach(pass => {
    const reformattedPass = mapToBPType(pass.split(''));
    const rowBits = reformattedPass.slice(0, 7);
    const colBits = reformattedPass.slice(7);

    const rowNum = binarySpacePartitionResolver(rowBits);
    const colNum = binarySpacePartitionResolver(colBits);

    const id = rowNum * 8 + colNum;

    max = Math.max(max, id);
  });

  return max;
}

function binarySpacePartitionResolver(partitions: BinaryPartition[]): number {
  let leftEdge = 0;
  let rightEdge = 2 ** partitions.length - 1;
  let mid = getMidpoint(leftEdge, rightEdge);

  partitions.forEach(dir => {
    if (dir === 'left') {
      rightEdge = Math.floor(mid);
      mid = getMidpoint(leftEdge, rightEdge);
    } else if (dir === 'right') {
      leftEdge = Math.ceil(mid);
      mid = getMidpoint(leftEdge, rightEdge);
    }
  });

  return leftEdge;
}

function getMidpoint(leftEdge: number, rightEdge: number): number {
  return (rightEdge - leftEdge) / 2 + leftEdge;
}

function mapToBPType(arr: string[]): BinaryPartition[] {
  return arr.map(char => {
    if (char === 'F' || char === 'L') return 'left';
    else if (char === 'B' || char === 'R') return 'right';
    else throw new Error('Invalid char encountered in mapToBPType');
  });
}

export function solve5B(): number {
  const passes = loadFileAsArrayOfLines('5_input.txt');
  let min = +Infinity;
  let max = -Infinity;

  const ids = new Set();

  passes.forEach(pass => {
    const reformattedPass = mapToBPType(pass.split(''));
    const rowBits = reformattedPass.slice(0, 7);
    const colBits = reformattedPass.slice(7);

    const rowNum = binarySpacePartitionResolver(rowBits);
    const colNum = binarySpacePartitionResolver(colBits);

    const id = rowNum * 8 + colNum;

    max = Math.max(max, id);
    min = Math.min(min, id);
    ids.add(id);
  });

  for (let i = min; i < max; i++) {
    if (!ids.has(i)) return i;
  }

  throw new Error('No solution found!');
}
