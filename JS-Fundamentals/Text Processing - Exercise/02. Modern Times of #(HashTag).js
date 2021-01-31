function solve(text) {

    text.split(" ").forEach(x=> {
        if(x.startsWith("#")) {
            x=x.substr(1)
            if(x.split("").every(y =>((x.charCodeAt(y) >=65 && x.charCodeAt(y)  <=90)
            ||(x.charCodeAt(y) >=97 && x.charCodeAt(y) <=122))) && x.length !==0) {
                console.log(x);
            }
        }
    })
}
