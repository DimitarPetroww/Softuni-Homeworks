function convertObject(name1 , name2 , hairColor) {
    let object= {
        name :name1,
        lastName:name2,
        hairColor: hairColor
    }
    let json=JSON.stringify(object)
    return json
}
