function convertJSON(string) {
    let object=JSON.parse(string)
    for(let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}
