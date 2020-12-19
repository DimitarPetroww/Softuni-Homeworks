function solve(count , type , day) {
    let price=0
    if(type === "Students") {
        if(day==="Friday") {
            if(count >=30) {
                price=85/100 * (count * 8.45)
            }else {
                price=count * 8.45
            }
        }else if(day === "Saturday") {
            if(count >=30) {
                price=85/100 * (count * 9.8)
            }else {
                price=count * 9.8
            }

        }else if(day=== 'Sunday') {
            if(count >=30) {
                price=85/100 * (count * 10.46)
            }else {
                price=count * 10.46
            }
        }
    }else if(type === "Business") {
        if(day==="Friday") {
            if(count >=100) {
                price=((count-10) * 10.9)
            }else {
                price=count * 10.9
            }
        }else if(day === "Saturday") {
            if(count >=100) {
                price=((count-10) * 15.6)
            }else {
                price=count * 15.6
            }

        }else if(day=== 'Sunday') {
            if(count >=100) {
                price=((count-10) * 16)
            }else {
                price=count * 16
            }
        }
    }else if(type === "Regular") {
        if(day==="Friday") {
            if(count >=10 && count <=20) {
                price=95/100 *(count * 15)
            }else {
                price=count * 15
            }
        }else if(day === "Saturday") {
            if(count >=10 && count <=20) {
                price=95/100 *(count * 20)
            }else {
                price=count * 20
            }

        }else if(day==="Sunday") {
            if(count >=10 && count <=20) {
                price=95/100 *(count * 22.5)
            }else {
                price=count * 22.5
            }
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
