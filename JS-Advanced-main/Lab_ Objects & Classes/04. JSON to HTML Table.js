function solve(arr) {
    let data = JSON.parse(arr)
    let keys = Object.keys(data[0])
    let html = `<table>\n`
    html += `\t<tr>${keys.map(x => `<th>${replace(x)}</th>`).join("")}</tr>\n`
    data.forEach(x => {
        html += `\t<tr>${Object.values(x).map(y=> `<td>${replace(y)}</td>`).join("")}</tr>\n`
    })
    html += `</table>`
    return html
    function replace(str) {
        return String(str).replace(/&/g , '&amp;').replace(/</g , "&lt;").replace(/>/g , "&gt;").replace(/"/g , "&quot;").replace(/'/g , "&#39;")
    }
}
