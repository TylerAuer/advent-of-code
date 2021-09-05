import fs from 'fs';

type InputFiles = '1_input.txt' | '2_input.txt' | '3_input.txt';

export function loadFileAsArrayOfLines(file: InputFiles): string[] {
  return fs.readFileSync(file, 'utf8').toString().split('\n');
}
