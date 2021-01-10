function solve(arr) {
    let winner=undefined
    let dashboard=[[false, false, false],
                [false, false, false],
                [false, false, false]]
    let player="X"
    for (const move of arr) {
        if(dashboard.some(x=>x.includes(false))) {
            let [row , column]=move.split(" ")
        if(!dashboard[row][column]) {
            dashboard[row][column]=player
        }else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        if(checkWinner(player)) {
            winner=player
            console.log(`Player ${winner} wins!`);
            for(let i=0;i<dashboard.length;i++) {
                console.log(dashboard[i].join("\t"));
            }
            break;
        }
        player=player === "X" ? "O" : "X"
        }
    }
    
    function checkWinner(player) {
        let isWinner=false
        for(let i=0;i<dashboard.length;i++) {
            if(dashboard[i][0]===player && dashboard[i][1]===player && dashboard[i][2]===player) {
                isWinner=true
                break;
            }else if(dashboard[0][i]===player && dashboard[1][i]===player && dashboard[2][i]===player) {
                isWinner=true
                break;
            }

        }
        if(!isWinner) {
            if(dashboard[0][0]===player && dashboard[1][1]===player && dashboard[2][2]===player) {
                isWinner=true
            }else if(dashboard[2][0]===player && dashboard[1][1]===player && dashboard[0][2]===player) {
                isWinner=true
            }
        }
        return isWinner;
    }
    if(!winner) {
        console.log("The game ended! Nobody wins :(");
        for(let i=0;i<dashboard.length;i++) {
            console.log(dashboard[i].join("\t"));
        }
    }
}
