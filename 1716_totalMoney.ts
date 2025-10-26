function totalMoney(n: number): number {
  let money = 0;
  let weekly = 1;
  let days = 0;

  while (days < n) {
    for (let i = weekly; i < weekly + 7; i++) {
      if (days === n) return money;

      money += i;
      days++;
    }
    weekly++;
  }

  return money;
}
