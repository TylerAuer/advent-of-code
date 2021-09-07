import { solve1A, solve1B } from './1';
import { solve2A, solve2B } from './2';
import { solve3A, solve3B } from './3';
import { solve4A, solve4B } from './4';
import { solve5A, solve5B } from './5';
import { solve6A, solve6B } from './6';
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

  console.log(' ');

  const solution3A = solve3A();
  log.green(`Solution 3A: ${solution3A}`);

  const solution3B = solve3B();
  log.green(`Solution 3B: ${solution3B}`);

  console.log(' ');

  const solution4A = solve4A();
  log.red(`Solution 4A: ${solution4A}`);

  const solution4B = solve4B();
  log.red(`Solution 4B: ${solution4B}`);

  console.log(' ');

  const solution5A = solve5A();
  log.green(`Solution 5A: ${solution5A}`);

  const solution5B = solve5B();
  log.green(`Solution 5B: ${solution5B}`);

  console.log(' ');

  const solution6A = solve6A();
  log.red(`Solution 6A: ${solution6A}`);

  const solution6B = solve6B();
  log.red(`Solution 6B: ${solution6B}`);
})();
