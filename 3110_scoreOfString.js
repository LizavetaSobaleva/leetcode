var scoreOfString = function(s) {
    let result = []

    for(let i = 0; i < s.length - 1; i++) {
        let diff = Math.abs(s[i].charCodeAt() - s[i+1].charCodeAt())
        result.push(diff)
    }

    return result.reduce((a,b) => a + b, 0)
};

console.log(scoreOfString("hello"))

console.log('A'.charCodeAt() - 64)
console.log('a'.charCodeAt() - 96)
console.log(102 % 100)
