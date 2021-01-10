function solve() {
   let obj={}
   let finalCheckout=[]
   let finalPrice=0
   let textArea=document.getElementsByTagName("textarea")[0]
   let products = document.getElementsByClassName("product-title")
   let buttons = document.getElementsByClassName("add-product")
   let checkout=document.getElementsByClassName("checkout")[0]
   Array.from(products).forEach((x , i) => {
       obj[i]=[x.innerHTML , document.getElementsByClassName("product-line-price")[i].innerHTML]
   })
   Array.from(buttons).map((x , i)=> x.addEventListener("click" , () => {
       textArea.innerHTML+=`Added ${obj[i][0]} for ${obj[i][1]} to the cart.\n`
       if(!finalCheckout.includes(obj[i][0])) {
           finalCheckout.push(obj[i][0])
       }
       finalPrice+=Number(obj[i][1])
   }))
   checkout.addEventListener("click" , () => {
       textArea.innerHTML+=`You bought ${finalCheckout.join(", ")} for ${finalPrice.toFixed(2)}.`
       checkout.disabled=true
       Array.from(buttons).map(x=> x.disabled=true)
   })
}