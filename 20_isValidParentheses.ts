function isValid(s: string): boolean {
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  if (s.length % 2 !== 0 || map.has(s[0])) return false;

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && stack.at(-1) === map.get(s[i])) stack.pop();
    else stack.push(s[i]);
  }

  return stack.length === 0;
}

console.log(isValid("()({[{}{}]})"));
