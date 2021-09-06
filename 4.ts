import { loadFileAsArrayOfLines } from './utils/file_utils';
import { log } from './utils/log';

type Passport = {
  byr?: string;
  iyr?: string;
  eyr?: string;
  hgt?: string;
  hcl?: string;
  ecl?: string;
  pid?: string;
  cid?: string;
};

export function solve4A(): number {
  const passportList = getPassports();

  let validCount = 0;
  passportList.forEach((passport, i) => {
    let isValid = false;

    const hasBYR = !!passport.byr;
    const hasIYR = !!passport.iyr;
    const hasEYR = !!passport.eyr;
    const hasHGT = !!passport.hgt;
    const hasHCL = !!passport.hcl;
    const hasECL = !!passport.ecl;
    const hasPID = !!passport.pid;

    if (hasBYR && hasIYR && hasEYR && hasHGT && hasHCL && hasECL && hasPID) {
      isValid = true;
    }

    if (isValid) validCount++;
  });

  return validCount;
}

export function solve4B() {
  const passportList = getPassports();

  let validCount = 0;
  passportList.forEach((passport, i) => {
    let isValid = false;

    const validBYR = !!passport.byr && passport.byr >= '1920' && passport.byr <= '2002';
    const validIYR = !!passport.iyr && passport.iyr >= '2010' && passport.iyr <= '2020';
    const validEYR = !!passport.eyr && passport.eyr >= '2020' && passport.eyr <= '2030';
    const validHGT = !!passport.hgt && validateHGT(passport.hgt);
    const validHCL = !!passport.hcl && /^#[0-9a-f]{6}$/.test(passport.hcl);
    const validECL = !!passport.ecl && /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(passport.ecl);
    const validPID = !!passport.pid && /^\d{9}$/.test(passport.pid);

    if (validBYR && validIYR && validEYR && validHGT && validHCL && validECL && validPID) {
      isValid = true;
    }

    if (isValid) validCount++;
  });

  return validCount;
}

function getPassports(): Passport[] {
  const lines = loadFileAsArrayOfLines('4_input.txt');
  const passports: Passport[] = [];

  let index = 0;

  lines.forEach(line => {
    if (passports.length - 1 < index) passports.push({});

    if (line.length <= 4) {
      index++;
    } else {
      const keyValuePairs = line.split(' ');
      keyValuePairs.forEach(pair => {
        const splitPair = pair.split(':');
        const key = splitPair[0] as keyof Passport;
        const value = splitPair[1];
        passports[index][key] = value;
      });
    }
  });

  return passports;
}

function validateHGT(s: string): boolean {
  const regex = /^(\d+)(cm|in)$/;
  const match = regex.exec(s);
  if (!match) return false;

  const height = parseInt(match[1]);
  const unit = match[2];

  if (unit === 'cm') {
    return height >= 150 && height <= 193;
  } else if (unit === 'in') {
    return height >= 59 && height <= 76;
  }
  return false;
}
