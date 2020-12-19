function encodeAndDecodeMessages() {
    let [encodeBtn , decodeBtn]=document.getElementsByTagName("button")
    let [input , output]=document.getElementsByTagName("textarea")
    encodeBtn.addEventListener("click" , ()=> {
        let msg=[...input.value].map(x=> x=String.fromCharCode(x.charCodeAt(0) + 1))
        .reduce((a , c) => a +c , "")
        input.value=""
        output.value=msg
    })
    decodeBtn.addEventListener("click" , () => {
       let msg=[...output.value].map(x=> x=String.fromCharCode(x.charCodeAt(0) - 1))
       .reduce((a , c) => a +c , "")
       output.value=msg
    })
}
