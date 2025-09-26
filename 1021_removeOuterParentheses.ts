function removeOuterParentheses(s: string): string {
  if (s.length === 2) return "";

  let balance = 0;
  let start = 0;
  let result = "";

  for (let end = 0; end < s.length; end++) {
    s[end] === "(" ? balance++ : balance--;

    if (balance === 0) {
      result += s.slice(start + 1, end);
      start = end + 1;
    }
  }

  return result;
}

console.log(removeOuterParentheses("()()"));
