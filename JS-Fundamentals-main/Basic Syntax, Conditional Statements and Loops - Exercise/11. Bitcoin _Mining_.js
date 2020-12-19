function solve(input) {
    let money=0
    let result=0
    let bitcoin=0
    let firstBitcoin;
    let isHitted=false
    for(let days=1;days<=input.length;days++) {
        let minedGrams=input[days-1]
        if(days % 3===0) {
          money=(minedGrams * 67.51) - 30/100 *(minedGrams * 67.51)
        }else{
            money=minedGrams * 67.51
        }
        result+=money
        if (result >= 11949.16) {
            while (result >= 11949.16) {
                result -= 11949.16
                bitcoin++
            }
        }
        if(bitcoin>=1) {
            if(isHitted===false) {
            isHitted=true
            firstBitcoin=days
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${result.toFixed(2)} lv.`);
}
