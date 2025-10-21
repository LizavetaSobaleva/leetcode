function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const result: number[] = [];
  const n = nums1.length;
  const m = nums2.length;

  for (const num of n > m ? nums1 : nums2) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of n > m ? nums2 : nums1) {
    if (map.get(num)) {
      result.push(num);
      map.set(num, map.get(num)! - 1);
    }
  }

  return result;
}

console.log(intersect([4, 9, 5, 9, 9], [9, 4, 8, 4, 0, 6, 7]));
