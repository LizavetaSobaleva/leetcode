function reverseWords(s: string): string {
    return s.split(' ').filter((word) => word.length).reverse().join(" ")
};