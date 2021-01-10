function solve(speed, area) {
    const limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }
    let status;
    const diff=speed - limits[area]
    if(diff < 20) {
        status="speeding"
    }else if(diff < 40) {
        status="excessive speeding"
    }
    return speed <= limits[area] 
    ? `Driving ${speed} km/h in a ${limits[area]} zone`
    : `The speed is ${diff} km/h faster than the allowed speed of ${limits[area]} - ${status ? status : "reckless driving "}`
}
