(function(){
  const spanEl = document.querySelector("main h2 span");
  const txtArr = ['Share your own review', 'Best Place for All', 'Try a new challenge with various place'];
  let index = 0;
  let currentTxt = txtArr[index].split("");
  function writeTxt(){
    spanEl.textContent  += currentTxt.shift(); 
    if(currentTxt.length !== 0){ 
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }
  function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
      setTimeout(deleteTxt, Math.floor(Math.random() * 100))
    }else{
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
  writeTxt();
})();

function uploadChange(file) {
  var el = file.parentNode.parentNode.getElementsByTagName("*");
  for (var i = 0; i < el.length; i++) {
    var node = el[i];
    if (node.className == "file-text") {
      node.innerHTML = file.value;
      break;
    }
  }
}