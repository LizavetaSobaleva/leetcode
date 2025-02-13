function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set<number>(nums1);
  let set2 = new Set<number>(nums2);
  let result: number[] = [];

  for (let num of set1.values()) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
