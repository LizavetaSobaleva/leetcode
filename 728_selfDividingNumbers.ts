function selfDividingNumbers(left: number, right: number): number[] {
  const result: number[] = [];

  for (let i = left; i <= right; i++) {
    if (i < 10) {
      result.push(i);
    } else {
      let nums = new Set(String(i).split(""));
      if (isSelfDividing(i, nums)) result.push(i);
    }
  }

  function isSelfDividing(n: number, set: Set<string>): boolean {
    for (let num of set) {
      if (n % +num !== 0) return false;
    }
    return true;
  }

  return result;
}

console.log(selfDividingNumbers(47, 85));
