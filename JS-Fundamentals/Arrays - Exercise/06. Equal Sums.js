function solve(arr) {
    let isHitted = false
    for (var i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0
        for (let j = 0; j < i; j++) { //left sum
            leftSum += arr[j]
        } for (let k = i + 1; k < arr.length; k++) { //right
            rightSum += arr[k]
        } if (rightSum === leftSum) {
            isHitted = true
            break;
        } else {
            isHitted=false
        }
    }
    if (isHitted) {
        console.log(i);
    } else if (!isHitted) {
        console.log("no");
    }
}
