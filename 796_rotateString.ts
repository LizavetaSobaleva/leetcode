function rotateString(s: string, goal: string): boolean {
  const str = [...s];

  for (let i = 0; i < str.length; i++) {
    if (str.join("") === goal) return true;
    let char = str.shift();
    str.push(char);
  }

  return false;
}
