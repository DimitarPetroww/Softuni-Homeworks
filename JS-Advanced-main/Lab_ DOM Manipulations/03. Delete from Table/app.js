function deleteByEmail() {
    let input=document.getElementsByTagName("input")[0]
    let isFound=false
    Array.from(document.querySelectorAll("#customers tbody tr td")).forEach((x , i) => {
        if(i% 2 !==0) {
            if(x.innerHTML===input.value) {
                x.parentElement.remove()
                isFound=true
            }
        }
    })
    if(!isFound) {
        document.getElementById("result").innerHTML="Not found."
    }
    input.value=""
}
