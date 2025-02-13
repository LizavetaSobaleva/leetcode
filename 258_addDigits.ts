function addDigits(num: number): number {
  let nums = Array.from(String(num), Number);

  if (nums.length === 1) {
    return nums[0];
  } else {
    const sum = nums.reduce((a, c) => a + c);
    return addDigits(sum);
  }
}

console.log(addDigits(38));
