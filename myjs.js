function changeButton(){
    var button = document.getElementById("button1");
    button.textContent="I LOVE YOU BB";
    return;
}

function pwcheck(){
  console.log("made it to pw check")
  var div = document.getElementById("maindiv")
  var formVal = document.getElementById("pw").value
  console.log(formVal)
  console.log(div)
  var pw = "ilovebb24/7"
  if(pw === formVal){
     div.style.visibility = "visible"
     console.log(div)

  }
  else{
      
  }
}