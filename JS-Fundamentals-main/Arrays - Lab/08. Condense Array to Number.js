function solve(arr) {
    let special = []
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            special.push(arr[i] + arr[i + 1])

        }
        arr = special
        special = []
    }
    console.log(arr.toString());
}
