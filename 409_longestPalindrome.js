var longestPalindrome = function(s) {
    if (s.length === 1) return 1

    let counter = 0
    const letters = {}

    for(let i = 0; i < s.length; i++) {
        letters[s[i]] = (letters[s[i]] || 0) + 1
        if (letters[s[i]] % 2 === 0) counter = counter + 2
    }

    if(s.length > counter) counter++
    return counter
};

console.log(longestPalindrome('abccccdd'))