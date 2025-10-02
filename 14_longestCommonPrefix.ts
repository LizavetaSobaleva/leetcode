function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  if (strs.length === 1) return strs[0];

  let result = "";
  const minLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLength; i++) {
    let current = strs[0][i];
    for (let str of strs) {
      if (str[i] !== current) return result;
    }
    result += current;
  }

  return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
