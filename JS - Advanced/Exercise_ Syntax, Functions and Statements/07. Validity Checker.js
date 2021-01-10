function solve(x1, y1, x2, y2) {
    return  [`{${x1}, ${y1}} to {0, 0} is ${checkValidity(x1, y2, 0, 0)}`,
    `{${x2}, ${y2}} to {0, 0} is ${checkValidity(x2, y2, 0, 0)}`,
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(x1, y1, x2, y2)}`].join("\n")
    function checkValidity(x1, y1, x2, y2) {
        let value = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        if (Number.isInteger(value)) {
            return "valid"
        } else {
            return "invalid"
        }
    }
}
