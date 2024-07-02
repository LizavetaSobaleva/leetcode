function search(nums, target) {
	let start = 0
    let end = nums.length-1

    while(start <= end) {
        let mid = start + Math.floor((end-start)/2)
        if(nums[mid] === target) return mid
        
        if(nums[start] <= nums[mid]) {
            if(nums[start] <= target && target < nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if(nums[mid] < target && target <= nums[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
}

console.log(search([4,5,6,7,0,1,2], 0))


var rotate = function(nums, k) {
    return nums.slice(k+1).concat(nums.slice(0,k+1))
};