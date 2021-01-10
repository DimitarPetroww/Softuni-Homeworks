function arrayMap(arr , func) {
    return arr.reduce((a , c)=>{a.push(func(c)) 
        return a
    }
    , [])
}