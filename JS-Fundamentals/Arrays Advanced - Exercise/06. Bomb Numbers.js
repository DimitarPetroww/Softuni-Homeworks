function solve(arr, bomb) {
    let bombNumber = bomb[0]
    let bombPower = bomb[1]
    let index = arr.indexOf(bombNumber)
    
    while(index > -1) {
        arr.splice(Math.max((index-bombPower) , 0) , Math.min(bombPower , index))
        index=arr.indexOf(bombNumber)
        arr.splice(index , (bombPower + 1))
        index=arr.indexOf(bombNumber)
    }
    console.log(sum(arr))

    function sum(array) {
        let sum=0
        for(let n of array) {
            sum+=n
        }
        return sum;
    }
}
