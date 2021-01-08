function object (arg1 , arg2 , arg3) {
    let object= {
        firstName : arg1,
        lastName:arg2,
        age : arg3
    }
    let entries=Object.entries(object)
    for(let [key , value] of entries) {
        console.log(`${key}: ${value}`);
    }
    
}
