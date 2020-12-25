function solve() {
    let [checkBtn , clearBtn]=document.getElementsByTagName("button")
    let size=document.querySelectorAll("tbody tr").length
    checkBtn.addEventListener("click" , () => {
        let cells=Array.from(document.querySelectorAll("input")).map(e=> e.value)
        let table=[]
        for(let i=0;i<size;i++) {
            table.push(cells.splice(0,size))
        }
        let colBoolean=table.map(x=> new Set(x).size===size)
        let rowBoolean=[]
        for(let col=0;col<table.length;col++) {
            let temp=[]
            for(let row=0;row<table.length;row++) {
                temp.push(table[row][col])
            }
            rowBoolean.push(new Set(temp).size===size)
        }
        if(colBoolean.every(x=>x===true) && rowBoolean.every(x=> x===true)) {
            document.getElementsByTagName("table")[0].style.border="2px solid green"
            document.querySelector("#check p").style.color="green"
            document.querySelector("#check p").textContent="You solve it! Congratulations!"
        }else {
            document.getElementsByTagName("table")[0].style.border="2px solid red"
            document.querySelector("#check p").style.color="red"
            document.querySelector("#check p").textContent='NOP! You are not done yet...'

        }
    })
    clearBtn.addEventListener("click" , () => {
        Array.from(document.getElementsByTagName("input")).map(cell=>cell.value="")
        document.getElementsByTagName("table")[0].style.border=""
        document.querySelector("#check p").textContent=""
        document.querySelector("#check p").style.color=""
    })
}