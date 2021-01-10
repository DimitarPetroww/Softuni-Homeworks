function solve(arr) {
    arr=arr.map(e=>JSON.parse(e)).map(e=>Object.values(e))
    let html="<table>\n"
    arr.forEach(x=> {
        html+="\t<tr>\n"
        html+=`\t\t<td>${x[0]}</td>\n`
        html+=`\t\t<td>${x[1]}</td>\n`
        html+=`\t\t<td>${x[2]}</td>\n`
        html+=`\t</tr>\n`
    })
    html+=`</table>\n`
    return html
}
