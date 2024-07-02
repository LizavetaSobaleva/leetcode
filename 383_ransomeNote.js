var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false

    const noteChars = {}

    for (let i = 0; i < ransomNote.length; i++) {
        noteChars[ransomNote[i]] = (noteChars[ransomNote[i]] || 0) + 1
    }
    console.log(noteChars)

    for (let i = 0; i < magazine.length; i++) {
        if (noteChars[magazine[i]]) noteChars[magazine[i]]--
    }

    for (let key in noteChars) {
        if (noteChars[key] !== 0) return false
    }

    return true
};

console.log(canConstruct('aa', 'baa'))