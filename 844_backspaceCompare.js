var backspaceCompare = function(s, t) {
    const backspacing = (str) => {
        let stack = []

        for (let i = 0; i < str.length; i++) {

            if (str[i] === '#') stack.pop()
            else stack.push(str[i])
        }
        return stack.join('')
    }
    return backspacing(s) === backspacing(t)
};

console.log(backspaceCompare('a##c', "#a#c"))