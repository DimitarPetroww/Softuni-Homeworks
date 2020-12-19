function solve(arr) {
    //правим полето 
    let field = new Array(arr.shift()).fill(0)
    //взимаме индексите на които има калинки
    const indexes = arr.shift().split(" ").map(Number)
    //обикаляме по индексите за да ги сложим на полето
    for (let i = 0; i < indexes.length; i++) {
        let current = indexes[i]
        if (field[current] !== undefined) {
            field[current] = 1
        }
    }
    //обикаляме входния масив за да разделим стъпките
    for (let i = 0; i < arr.length; i++) {
        let event = arr[i].split(" ")
        const startIndex = Number(event.shift())
        const direction = event.shift()
        const flyLength = Number(event.shift())
        //Проверяваме дали са ни дали калинка , която е извън полето 
        if (field[startIndex] !== 0 && field[startIndex] !== undefined) {
            //нулираме индекса на калинката , защото ще я местим
            field[startIndex] = 0
            //започваме ходенето , като правим 2 фор цикъла за ляво и дясно
            if (direction === "right") {
                let index = startIndex + flyLength
                for (let i =index; i < field.length; i += index) {
                    if (field[i] === 0) {
                        field[i] = 1
                        break;
                    }
                }
            } else {
                let index = startIndex - flyLength
                for (let i = index; i >= 0; i -=index) {
                    if (field[i] === 0) {
                        field[i] = 1
                        break;
                    }
                }
            }
        }
    }
    console.log(field.join(" "));
}
