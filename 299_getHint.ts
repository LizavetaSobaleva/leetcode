function getHint(secret: string, guess: string): string {
  let bulls: number = 0;
  let cows: number = 0;
  const secretMap = new Map<number, number>();
  const guessMap = new Map<number, number>();

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) bulls++;
    else {
      secretMap.set(+secret[i], (secretMap.get(+secret[i]) || 0) + 1);
      guessMap.set(+guess[i], (guessMap.get(+guess[i]) || 0) + 1);
    }
  }

  for (let num of secretMap.keys()) {
    if (guessMap.has(num))
      cows += Math.min(secretMap.get(num)!, guessMap.get(num)!);
  }

  return `${bulls}A${cows}B`;
}

console.log(getHint("1807", "7810"));
