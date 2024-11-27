function reverseVowels(s: string): string {
    const vowels = 'aeiouAEIOU'
    const arr = s.split('')
    let start = 0
    let end = s.length - 1

    while (start < end) {
        if (!vowels.includes(arr[start])) start++
        else if (!vowels.includes(arr[end])) end--
        else {
            let tmp = arr[start]
            arr[start] = arr[end]
            arr[end] = tmp
            start++
            end--
        }
    }
    return arr.join('')
};