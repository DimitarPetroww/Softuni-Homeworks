function solve(arr) {
    arr=arr[0].split("|")
    let health=100
    let coins=0
    let room=0
    for(let i=0;i<arr.length;i++) {
        let event = arr[i].split(" ");
        for(let j=0;j<event.length;j++) {
            room++
            let monster=event[j]
            let hp=Number(event[++j])
            if(monster==="potion") {
                health+=hp
                if(health >=100) {
                    let notNeeded=health-hp
                    console.log(`You healed for ${100-notNeeded} hp.`);
                    health=100
                }else {
                    console.log(`You healed for ${hp} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
            }else if(monster==="chest") {
                coins+=hp
                console.log(`You found ${hp} coins.`);
            }else {
                if(health >0) {
                    health-=hp
                    if(health <=0) {
                        console.log(`You died! Killed by ${monster}.`);
                        console.log(`Best room: ${room}`);
                    }else {
                        console.log(`You slayed ${monster}.`)
                    }
                }
            }
        }
        if(health <=0) {
            break;
        }
    }
    if(health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
