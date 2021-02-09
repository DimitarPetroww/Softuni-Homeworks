function solve(string) {
    let pattern=/\b(?<day>[0-9]{2})([-./])(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4})\b/g
    while((validDate=pattern.exec(string.join(""))) !==null) {
        console.log(`Day: ${validDate.groups["day"]}, Month: ${validDate.groups["month"]}, Year: ${validDate.groups["year"]}`);
    }
}
