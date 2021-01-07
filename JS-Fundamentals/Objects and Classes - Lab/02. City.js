function city(arg1 , arg2 , arg3 ,arg4 ,arg5) {
    let obj= {
        name : arg1,
        area :arg2,
        population :arg3,
        country : arg4,
        postCode : arg5,
    }
    for(let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
