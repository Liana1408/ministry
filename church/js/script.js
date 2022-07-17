var content1 = document.getElementById("content1");
var button =  document.getElementById("show-more");

button.onclick = function(){
    if (content1.className == "open"){
        //shrink the box
        content1.className = "";
        button.innerHTML = "show more";
    } else {
        //expand the box 
        content1.className = "open";
        button.innerHTML = "show less";
    }
}

