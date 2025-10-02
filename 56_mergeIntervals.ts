function merge(intervals: number[][]): number[][] {
    if (intervals.length === 1) return intervals

    intervals.sort((a,b) => a[0] - b[0])
    let result: number[][] = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i]
        let lastResult = result.at(-1)
        
        if (lastResult![1] >= current[0]) {
            result.at(-1)![1] = Math.max(lastResult![1], current[1])
        } else result.push(current)
    }

    return result
};

console.log(merge([[1,4],[4,6],[15,18],[8,10]]))