function isLongPressedName(name: string, typed: string): boolean {
  let j = 0;

  for (let i = 0; i < typed.length; i++) {
    if (j < name.length && name[j] === typed[i]) {
      j++;
    } else if (i === 0 || typed[i] !== typed[i - 1]) {
      return false;
    }
  }

  return j === name.length;
}

console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("leelee", "lleeelee"));
