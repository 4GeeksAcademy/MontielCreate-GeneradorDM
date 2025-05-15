import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 const pro = ["the","our"];
 let randomIndexPro = Math.floor(Math.random()*pro.length)
 let proRandom = pro[randomIndexPro]


 const adj = ["great","big"];
 let randomIndexAdj = Math.floor(Math.random()*adj.length)
 let adjRandom = adj[randomIndexAdj]


 const noun = ["jogger","racoon"];
 let randomIndexNoun = Math.floor(Math.random()*noun.length)
 let nounRandom = noun[randomIndexNoun]



console.log(proRandom, adjRandom, nounRandom)

 const ul = document.getElementById("domainList");
  const li = document.createElement("li");
  li.innerText = `${proRandom}${adjRandom}${nounRandom}.com`;
  ul.appendChild(li);

};
