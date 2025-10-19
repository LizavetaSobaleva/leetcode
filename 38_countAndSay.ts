function countAndSay(n: number): string {
  if (n === 1) return n.toString();

  let num = "1";

  for (let i = 1; i < n; i++) {
    num = say(num);
  }

  return num;
}

function say(num: string): string {
  let n = num[0];
  let freq = 1;
  const result: number[][] = [];

  for (let i = 1; i <= num.length; i++) {
    if (num[i] === n) {
      freq++;
    } else {
      result.push([freq, +n]);
      n = num[i];
      freq = 1;
    }
  }
  return result.flat().join("");
}

console.log(countAndSay(4));
