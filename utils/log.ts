import chalk from "chalk";

export const log = {
  red: (s: string) => console.log(chalk.red(s)),
  green: (s: string) => console.log(chalk.green(s)),
  blue: (s: string) => console.log(chalk.blue(s)),
  yellow: (s: string) => console.log(chalk.yellow(s)),
  magenta: (s: string) => console.log(chalk.magenta(s)),
  cyan: (s: string) => console.log(chalk.cyan(s)),
  white: (s: string) => console.log(chalk.white(s)),
  gray: (s: string) => console.log(chalk.gray(s)),

  boldRed: (s: string) => console.log(chalk.bold.red(s)),
  boldGreen: (s: string) => console.log(chalk.bold.green(s)),
  boldBlue: (s: string) => console.log(chalk.bold.blue(s)),
  boldYellow: (s: string) => console.log(chalk.bold.yellow(s)),
  boldMagenta: (s: string) => console.log(chalk.bold.magenta(s)),
  boldCyan: (s: string) => console.log(chalk.bold.cyan(s)),
  boldWhite: (s: string) => console.log(chalk.bold.white(s)),
  boldGray: (s: string) => console.log(chalk.bold.gray(s)),
}