function solve(input) {
    return JSON.parse(input).reduce((a , c) =>({...a , ...c}) , {})
}