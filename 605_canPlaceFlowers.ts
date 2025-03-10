function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let can = 0

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let prev = i === 0 ? 0 : flowerbed[i - 1]
            let next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]

            if (prev === 0 && next === 0) {
                can++
                flowerbed[i] = 1
            }
        }
    }

    return can >= n
};