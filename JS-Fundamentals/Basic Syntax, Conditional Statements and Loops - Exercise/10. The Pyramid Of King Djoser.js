function solve(a, increment) {
    let area = a * a
    let gold = 0
    let stone = 0
    let lazuli = 0
    let marble = 0
    let layers = 1
    for(let step=a-2;step>=1;step-=2) {
        let b = a
        a -= 2
        area = a * a
        stone += area * increment
        if (layers % 5 === 0) {
            let size = 4 * b
            lazuli += (size - 4) * increment
        } else if (layers % 5 !== 0) {
            let size = 4 * b
            marble += (size - 4) * increment
        }
        layers++
    }
    gold = area * increment
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(layers*increment)}`);
}
