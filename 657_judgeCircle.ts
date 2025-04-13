function judgeCircle(moves: string): boolean {
  const arr = moves.split("");
  const map = new Map<string, number>();

  for (const move of moves) {
    map.set(move, (map.get(move) ?? 0) + 1)
  }

  return map.get("U") === map.get("D") && map.get("L") === map.get("R")
}

console.log(judgeCircle("UDLRRL"));
