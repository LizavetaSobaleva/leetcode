function judgeCircle(moves: string): boolean {
  const arr = moves.split("");
  const map = new Map<string, number>();

  for (let i = 0; i < moves.length; i++) {
    const current = arr[i];
    map.set(current, (map.get(current) ?? 0) + 1);
  }

  if (map.get("U")! === map.get("D")! && map.get("L")! === map.get("R")!)
    return true;
  else return false;
}

console.log(judgeCircle("UDLRRL"));
