// change color
var changeColor = document.getElementById("changeColor");
var theme = document.getElementById("theme");
theme.style.color = "blue";
theme.innerHTML = "Bright Mode";
var main = document.getElementById("wrapper");
var alink = document.getElementsByTagName("a");
function colorChanger(){
  if (changeColor.value === "D"){
    changeColor.value = "B";
    main.id = "dark";
    alink.style.color = "white";
theme.innerHTML = "Dark Mode"
//document.querySelectorAll("solink").style.color = "white";
   
} else if (changeColor.value === "B"){
    changeColor.value = "D";
    changeColor.checked = false;
   // location.reload();
    main.id = "wrapper";
   theme.innerHTML = "Bright Mode";
}
else{
    main.id = "wrapper";
    theme.innerHTML = "Bright Mode";
}
}

changeColor.addEventListener("click", colorChanger);
  
/**changeColor.addEventListener("click", function(){
var main = document.getElementById("wrapper");
if (changeColor.value === "D"){
    changeColor.value = "B";
    main.id = "dark";
theme.innerHTML = "Dark Mode"
   
} else if (changeColor.value === "B"){
    changeColor.value = "D";
    //changeColor.checked;
    location.reload();
    //main.id = "wrapper";
   // theme.innerHTML = "Bright Theme";
}
else{
    main.id = "wrapper";
    //theme.innerHTML = "Bright Theme";
}
}); */
// collapsable

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// back to top
var btn = document.getElementById("btn");

 btn.addEventListener('click', function() {
 
 window.scrollTo(500,0);
});
