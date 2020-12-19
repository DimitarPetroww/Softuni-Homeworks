function solve(arr1 , arr2) {
    let index1=0
    let index2=0
    let count=0

    for(let i=0;i<arr1.length;i++) {
        let part1=arr1[i]
        for(let n=0;n<arr2.length;n++) {
            let part2=arr2[n]

            if(part1===part2) {
                console.log(part1);
            }
        }
    }
}
