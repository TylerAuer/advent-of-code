import { solve1A, solve1B } from './1';
import { solve2A, solve2B } from './2';
import { log } from './utils/log';

(() => {
  const solution1A = solve1A();
  log.green(`Solution 1A: ${solution1A}`);

  const solution1B = solve1B();
  log.green(`Solution 1B: ${solution1B}`);

  console.log(' ');

  const solution2A = solve2A();
  log.red(`Solution 2A: ${solution2A}`);

  const solution2B = solve2B();
  log.red(`Solution 2B: ${solution2B}`);
})();
