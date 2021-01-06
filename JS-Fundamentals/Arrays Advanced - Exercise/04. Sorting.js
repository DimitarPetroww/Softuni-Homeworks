function solve(arr) {
    let numbers = arr.sort((a, b) => a - b);
    let sortNumbres = [];
    let x=arr.length;

    for (let i = 0; i < x; i+=2) {
        let biggestNum = numbers.pop();
        let smallestNum = numbers.shift();
        sortNumbres.push(biggestNum,smallestNum);
    }
    console.log(sortNumbres.join(' '))
}
