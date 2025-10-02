function numWaterBottles(numBottles: number, numExchange: number): number {
  if (numBottles < numExchange) return numBottles;

  let drinked = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    const newBottles = Math.floor(emptyBottles / numExchange);
    drinked += newBottles;
    emptyBottles = (emptyBottles % numExchange) + newBottles;
  }

  return drinked;
}

console.log(numWaterBottles(15, 4));
