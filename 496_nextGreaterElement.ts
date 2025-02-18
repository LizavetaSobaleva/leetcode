function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let ans: number[] = [];

  for (let num of nums1) {
    let index = nums2.indexOf(num);
    let element = -1;

    for (let i = index + 1; i < nums2.length; i++) {
      if (nums2[i] > num) element = nums2[i];
      if (element !== -1) break;
    }
    ans.push(element);
  }

  return ans;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
