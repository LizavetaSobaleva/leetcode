function largestAltitude(gain: number[]): number {
    let alt = 0
    let highest = 0

    for (let i = 0; i < gain.length; i++) {
        alt += gain[i]
        highest = Math.max(highest, alt) 
    }

    return highest
};