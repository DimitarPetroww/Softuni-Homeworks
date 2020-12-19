function solve(car) {
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ]
    let { model, power, color, carriage, wheelsize } = car
    return {
        model,
        engine : engines.find(p=> power<=p.power),
        carriage:{type : carriage , color},
        wheels: Array(4).fill(wheelsize % 2===0? --wheelsize : wheelsize)
    }
}
