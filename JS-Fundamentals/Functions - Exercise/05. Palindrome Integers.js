function solve(arr) {
    let result=[]
    const loop = (x) => {
        for (let i = 0; i < x.length; i++) {
            let right = ""
            let left = ""
            let current = String(x[i])
            for (let r = 0; r < current.length; r++) {
                right += current[r]
            } for (let l = current.length - 1; l >= 0; l--) {
                left += current[l]
            }
            if (right === left) {
                result.push(true)
            } else {
                result.push(false)
            }
        }
        return result.join("\n")
    }
    console.log(loop(arr));
}
