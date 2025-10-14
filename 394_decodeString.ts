function decodeString(s: string): string {
  const numStack: number[] = [];
  const strStack: string[] = [];

  let currentNum = "";
  let currentStr = "";

  for (let ch of s) {
    if ("0" <= ch && ch <= "9") {
      currentNum += ch;
    } else if (ch === "[") {
      numStack.push(+currentNum);
      strStack.push(currentStr);
      currentNum = "";
      currentStr = "";
    } else if (ch === "]") {
      const n = numStack.pop()!;
      const prevStr = strStack.pop()!;
      currentStr = prevStr + currentStr.repeat(n);
    } else {
      currentStr += ch;
    }
  }

  return currentStr;
}

console.log(decodeString("3[a2[c]]"));
