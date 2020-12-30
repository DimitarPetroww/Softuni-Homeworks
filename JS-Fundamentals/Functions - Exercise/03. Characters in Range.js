function solve(arg1, arg2) {
    let result = []
    let loop = (x, y) => {
        for (let i = 0; i <= 177; i++) {
            if (String.fromCharCode(i) === x) {
                var start = i
            } else if (String.fromCharCode(i) === y) {
                var end = i
            }
        }
        return [start, end]
    }
    let finding = (arr) => {
        for (let i = arr[0] + 1; i < arr[1]; i++) {
            result.push(String.fromCharCode(i))
        }
        return result.join(" ");
    }
    if(arg1 <arg2) {
        console.log(finding(loop(arg1, arg2)));
    }else {
        console.log(finding(loop(arg2, arg1)));
    }

}
