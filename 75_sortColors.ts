function sortColors2(nums: number[]): void {
    let left = 0
    let mid = 0
    let right = nums.length - 1

    while (mid <= right) {
        if (nums[mid] === 0) {
            [nums[left], nums[mid]] = [nums[mid], nums[left]]
            left++
            mid++
        } else if (nums[mid] === 1) {
            mid++
        } else {
            [nums[mid], nums[right]] = [nums[right], nums[mid]]
            right--
        }
    }
};