function solve() {
  let correct=["onclick" , "JSON.stringify()" , "A programming API for HTML and XML documents"]
  let questions=document.getElementsByClassName("answer-text")
  let question=0
  let rightAnswers=0

  Array.from(questions).map((c) => c.addEventListener("click" , (e) => {
      if(correct.includes(e.target.innerHTML)) {
          rightAnswers++
      }

      document.getElementsByTagName("section")[question].style.display="none"
      if(document.getElementsByTagName("section")[question + 1] !==undefined) {
          document.getElementsByTagName("section")[++question].style.display="block"
      }else {
          document.getElementById("results").style.display="block"
          if(rightAnswers===3) {
              document.querySelector("#results h1").innerHTML="You are recognized as top JavaScript fan!"
          }else {
              document.querySelector("#results h1").innerHTML=`You have ${rightAnswers} right answers`
          }
      }

  }))
}
