function solve() {
  let siteElements=document.querySelectorAll(".link-1 a")
  
  for (const siteEl of siteElements) {
      siteEl.addEventListener("click" , click)
  }
  function click(e) {
      let sibling=e.currentTarget.nextElementSibling
      let [word1, timesVisited, word2]=sibling.innerText.split(" ").map(x=> isNaN(x) ? x : Number(x))
      
      timesVisited++

      sibling.innerText=`${word1} ${timesVisited} ${word2}`
  }
}
