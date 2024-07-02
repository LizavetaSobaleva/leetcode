var firstUniqChar = function(s) {
    const chars = {}

    for (let char of s) {
        chars[char] = (chars[char] || 0) + 1
    }

    let uniqChars = ''

    for (let key in chars) {
        if (chars[key] === 1) uniqChars += key
    } 

    return s.indexOf(uniqChars[0])
};

console.log(firstUniqChar('aabb'))

const arr = [[1,2],[3,5],[6,7],[8,10],[12,16]]

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) return s.length

    let maxLength = 0
    
    for (let i = 0; i < s.length; i++) {
        let substring = s[i]
        for (let j = i+1; j < s.length; j++) {
            if (!substring.includes(s[j])) {
                substring += s[j]
            } else {
                break
            }
        }
        maxLength = Math.max(maxLength, substring.length)
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('aивфыл'))

let queue = [0]

console.log(queue.length)