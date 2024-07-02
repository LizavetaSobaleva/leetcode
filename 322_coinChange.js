function coinChange(coins, amount) {
    if (amount <= 0) return 0
    
    const counter = new Array(amount + 1).fill(amount + 1)
    counter[0] = 0

    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j < amount + 1; j++) {
            counter[j] = Math.min(counter[j], counter[j - coins[i]] + 1)
        }
    }

    if (counter[amount] > amount) return -1
    return counter[amount]
}


console.log(coinChange([1,6,7,9,11], 13))