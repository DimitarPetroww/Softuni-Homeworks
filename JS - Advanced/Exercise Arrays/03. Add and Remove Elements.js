function solve(input) {
    let r = []
    for (let i = 0; i < input.length; i++) {
        input[i] === 'add' ? r.push(i + 1) : r.pop()
    }
    return r.length > 0 ? r.join('\n') : 'Empty'
}