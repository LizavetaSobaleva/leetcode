function isMonotonic(nums: number[]): boolean {
  if (nums.length === 1) return true;

  const inc: number[] = [...nums].sort((a, b) => a - b);
  const dec: number[] = [...nums].sort((a, b) => b - a);

  return nums.join("") === inc.join("") ? true : nums.join("") === dec.join("");
}

console.log(isMonotonic([1, 2, 2, 4]));
console.log(isMonotonic([5, 5, 4, 3, 1]));
console.log(isMonotonic([5, 1, 4, 3, 1]));
