function solve(arr) {
    let names=arr.shift().split(", ")
    let text=arr.slice(0 , arr.length - 1).join(", ")
    let cleanText=text.replace((/[^a-zA-Z0-9\s]+/g), "").split(" ")
    let players = {}
    
    for(let i=0;i<cleanText.length;i++) {
        if(names.includes(cleanText[i].match(/[A-Za-z]+/g).join(""))) {
            let name=cleanText[i].match(/[A-Za-z]+/g).join("")
            let distance=cleanText[i].match(/[\d]/g).map(Number).reduce((a , b)=> a + b , 0)
            if(players.hasOwnProperty(name)) {
                players[name]+=distance
            }else {
                players[name]=distance
            }
        } 
    }
    let result=Object.entries(players).sort((x , y)=> y[1] - x[1])
    console.log(`1st place: ${result[0][0]}`);
    console.log(`2nd place: ${result[1][0]}`);
    console.log(`3rd place: ${result[2][0]}`);
}
