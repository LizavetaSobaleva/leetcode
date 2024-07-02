function moveZeroes(nums) {
    let firstZero = nums.indexOf(0)
    if (firstZero === -1) return nums

    let num = firstZero + 1

    while (num < nums.length) {
        if (nums[num] !== 0) {
            nums[firstZero] = nums[num]
            nums[num] = 0
            firstZero = nums.indexOf(0)
        }
        num++
    }
    return nums
}

console.log(moveZeroes([1]))