function nextPermutation(nums: number[]): void {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i-1]) {
            for (let j = nums.length - 1; j >= i; j--) {
                if (nums[j] > nums[i-1]) {
                    [nums[j], nums[i-1]] = [nums[i-1], nums[j]]
                    
                    let left = i
                    let right = nums.length - 1

                    while (left < right) {
                        [nums[left], nums[right]] = [nums[right], nums[left]]
                        left++
                        right--
                    }

                    return
                }
            }
        }
    }
    nums.reverse()
};

let arr = [1,2,4,6,5,3]
nextPermutation(arr)
arr

