function productExceptSelf(nums) {
    const answer = []
    
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) continue
            product *= nums[j]
        }
        answer.push(product)
    }
    return answer
}

console.log(productExceptSelf([1,2,3,4]))