function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let drank = numBottles;
  let empty = numBottles;
  numBottles = 0;

  while (empty + numBottles >= numExchange) {
    if (empty >= numExchange) {
      empty = empty - numExchange;
      numBottles += 1;
      numExchange += 1;
    } else {
      drank += numBottles;
      empty += numBottles;
      numBottles = 0;
    }
  }

  return drank + numBottles;
}

console.log(maxBottlesDrunk(13, 13));
