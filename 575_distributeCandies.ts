function distributeCandies(candyType: number[]): number {
  const canEat = candyType.length / 2;
  const candySet = new Set(candyType);

  return canEat <= candySet.size ? canEat : candySet.size;
}

console.log(distributeCandies([1, 1, 1, 1, 1]));
