function minimumOperations(nums: number[]): number {
  let counter = 0;

  for (let num of nums) {
    if (num % 3) counter++;
  }

  return counter;
}

console.log(minimumOperations([1, 2, 3, 4]));
