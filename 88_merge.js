var merge = function(nums1, m, nums2, n) {
    if (n === 0) return nums1
    
    let i = 0
    let j = 0
    nums1.splice(m)

    while (j < n) {
        if (nums1[i] <= nums2[j]) i++
        else {
            nums1.splice(i,0, nums2[j])

            i++
            j++
        }
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))