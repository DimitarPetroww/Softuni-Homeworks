function solve() {
  let siteElements=document.querySelectorAll(".link-1 a")
  
  for (const siteEl of siteElements) {
      siteEl.addEventListener("click" , click)
  }
  function click(e) {
      let sibling=e.currentTarget.nextElementSibling
      let command=sibling.innerText.split(" ")
      let word1=command[0]
      let timesVisited=Number(command[1])
      let word2=command[2]
      timesVisited++

      sibling.innerText=`${word1} ${timesVisited} ${word2}`
  }
}
