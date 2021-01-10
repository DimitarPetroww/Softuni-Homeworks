function foo(x) {
    let week = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7,
    }
    if(week[x] !== undefined){ console.log(week[x]); }
    else{console.log('error');}
}

foo('sadas')